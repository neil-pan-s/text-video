<template>
  <div class="tv" ref="tv">

    <!-- 色卡测试 -->
    <!-- <div class="color">
      <span 
        :style="{ background: color.color, display: 'inline-block', width: '100px', height: '70px', margin: '10px', 'font-weight': 'bold', 'padding-top': '30px' }" 
        v-for="(color, index) in colors" 
        :key="'color.label' + index">
        {{ color.label }}
      </span>
    </div> -->

    <div 
      class="stage" 
      ref="stage"
      :style="{ 
        top: stage.offset.top + 'px',
        left: stage.offset.left + 'px',
        transform: `rotate(${stage.rotate || 0}deg)`,
        'transform-origin': `${stage.origin.left}px ${stage.origin.top}px`,
      }">

      <!-- 旋转焦点测试 -->
      <!-- <div 
        class="pointer" 
        ref="pointer"
        :style="{ 
          left: stage.origin.left - 3 + 'px',
          top: stage.origin.top - 3 + 'px',
          display: !stage.origin.left && !stage.origin.top ? 'none' : 'block',
        }">
      </div> -->

      <div 
        class="chapter" 
        ref="chapter" 
        :style="{ 
          right: chapter.right !== undefined ? chapter.right + 'px' : 'auto',
          left: chapter.left !== undefined ? chapter.left + 'px' : 'auto',
          top: chapter.top + 'px',
          // transform: `rotate(${chapter.rotate || 0}deg)`,
          // 'transform-origin': `top ${ chapter.direction || 'left' }`,
          animation: `rotate-${ chapter.direction } 1s ease forwards`,
        }" 
        v-for="(chapter, index) in chapters" 
        :key="'chapter' + index">

        <p class="item" v-for="(item, index) in chapter.items" :key="item.text + index" :class="{ title: item.title }" :style="{ 'text-align': chapter.direction || 'left' }"> 
          <span 
            :style="{ 
              color: item.color, 
              'font-size': item.size + 'px', 
              display: 'inline-block',
              'white-space': 'nowrap',
            }" 
            :class="[ 
              item.shadow === 'yes' ? 'shadow' : '' , 
              item.animation ? 'animate__animated animate__' + item.animation : ''
            ]">
            {{ item.text }}
          </span>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */

import 'animate.css'
// import jquery from 'jquery'
import TextVideo, { Colors } from  './tv'

export default {
  name: 'text-video',
  props: ['contents', 'loop', 'random'],
  data() {
    return {
      video: null,

      text: '',
      stage: {
        // 相对于窗口中心点的坐标偏移
        offset: {
          left: 0,
          top: 0,
        },
        // 画布旋转中心点
        origin: {
          left: 0,
          top: 0,
        },
        // 初始位置（用作参考点）
        reference: {
          left: 0,
          top: 0,
        },
        rotate: 0,
      },
      chapters: [
        { items: [], left: 0, top: 0, rotate: 0, direction: '' },
      ],
      colors: Colors,

      forceStop: false,
    }
  },
  async mounted() {
    // 计算 stage 原始相对位置参考点 (画布中心)
    this.stage.reference = {
      top: this.$refs.tv.clientHeight/2,
      left: this.$refs.tv.clientWidth/2,
    }
    this.stage.offset.top = this.stage.reference.top
    this.stage.offset.left = this.stage.reference.left
  
    this.$refs.stage.scrollIntoView(false)

    this.start()
  },
  destroyed() {
    if (this.video) { this.video.stop() }
  },
  methods: {
    async play(text) {
      if (this.video) {
        this.video.stop()
        delete this.video
      }

      this.text = text || this.getRandomContent()

      this.video = new TextVideo(this.text)
      
      await this.video.play(async (item, next, cancel) => {
        const chapter = this.chapters[this.chapters.length - 1]
        
        if (!item.direction) { 
          chapter.items.push(item) 

          // 标题处理
          if (this.chapters.length === 1 && chapter.items.length === 1) { item.title = true }

          setTimeout(() => next(), 1000) 
          return
        }

        await this.wait(2000)

        // 首次旋转方向 决定画布内容延申方向 
        if (!this.stage.direction) { this.stage.direction = item.direction }

        const el = this.$refs.chapter[this.$refs.chapter.length - 1]

        const degrees = {
          normal: 0,
          left: 90,
          right: -90,
        }

        // left/right/top 均为上一chapter旋转处理后的最终值
        let left, right, top, width, height, rotate = degrees[item.direction]

        width = el.clientWidth
        height = el.clientHeight

        // 元素旋转过 需要颠倒宽高
        if (chapter.direction && (chapter.direction !== 'normal')) {
          width = el.clientHeight
          height = el.clientWidth
        }

        // $.position 方式不支持父元素旋转 [舍弃]
        // const $position = jquery(el).position()
        const position = { top: el.offsetTop , left: el.offsetLeft }

        // $.position方式 
        //  父元素旋转时 - 相对位置参照点始调整为父元素旋转后的左上点
        //  子元素旋转时 - left/top值 为子元素旋转后左上点位置

        // offsetLeft/offsetTop方式 
        //  父元素旋转时 - 相对位置参照点始终为父元素旋转前的左上点
        //  子元素旋转时 - left/top值 为子元素旋转前左上点位置

        // 子元素旋转测试案例 见以下打印信息
        // console.log(position.top, '$' + $position.top, position.left, '$' + $position.left, chapter.items[0].text)

        // 修正 offsetLeft/offsetTop方式 为$.position算法 以保证后续计算可以兼容并支持父元素旋转
        if (chapter.direction === 'left') { position.left -= el.clientHeight }
        if (chapter.direction === 'right') { position.left += el.clientWidth }

        // 首次旋转 
        if (this.chapters.length === 1) {
          top = position.top + height
          left = position.left
          right = this.$refs.stage.clientWidth - position.left - width
        } else {
          rotate = degrees[item.direction]
          top = position.top + height
                  
          // 上一个元素旋转过 left值需要计算旋转后的最终位置
          if (chapter.direction === 'right' || chapter.direction === 'left') {
            left = position.left + width 
            right = this.$refs.stage.clientWidth - position.left + height
          } else {
            left = position.left
            right = this.$refs.stage.clientWidth - position.left - width
          }
        }

        // left/right 仅一个值有效 左旋时left生效 右旋时right生效
        if (item.direction === 'right') { 
          left = undefined 
        } else {
          right = undefined
        }

        // 新增章节 
        const newChapter = { 
          items: [], 
          left, 
          right,
          top, 
          direction: item.direction,
          rotate,
        }
        this.chapters.push(newChapter)

        // 画布旋转中心点
        const origin = { top: 0, left: 0 }
        origin.top = top
        if (item.direction === 'right') {
          origin.left = this.$refs.stage.clientWidth - right
        } else {
          origin.left = left
        }

        // 画布旋转
        if (this.stage.rotate !== 0) {
          this.stage.origin.left = origin.left
          this.stage.origin.top = origin.top
          this.stage.rotate = 0

          await this.wait(1000)

          // 将旋转中心点 移动到画布中央
          this.stage.offset.top = this.stage.reference.top - origin.top
          this.stage.offset.left = this.stage.reference.left - origin.left
        } else {
          // 将旋转中心点 移动到画布中央
          this.stage.offset.top = this.stage.reference.top - origin.top
          this.stage.offset.left = this.stage.reference.left - origin.left

          await this.wait(1000)

          this.stage.origin.left = origin.left
          this.stage.origin.top = origin.top
          this.stage.rotate = -rotate 
        }

        // 开发调试 
        // await new Promise((r) => document.body.onclick = r)

        // 等待画布旋转和平移后 添加文字行 
        await this.wait(1500)
        newChapter.items = [item]

        setTimeout(() => next(), 1000) 
      });

      // this.$refs.pointer.style.display = 'none'
    },
    async stop() {
      this.forceStop = true
      if (this.video) { this.video.stop() }
    },
    async start() {
      this.forceStop = false

      const isRandom = this.$props.random
      const isLoop = this.$props.loop 

      const contents = this.$props.contents

      let text, index = 0

      // eslint-disable-next-line no-constant-condition
      while(1) {
        if (this.forceStop) { break }
        if (index >= contents.length) { 
          index = 0 

          if (!isLoop) { break }
        }

        if(isRandom) {
          text = this.getRandomContent(contents)
        } else {
          text = contents[index]
        }

        await this.reset()
        await this.play(text)
        await this.wait(3000)

        index++
      }
    },
    getRandomContent(contents) {
      if (!contents) {
        contents = this.$props.contents
      }

      const random = (number) => {
        return Math.round( Math.random() * number )
      }

      return contents[random(contents.length - 1)]
    },
    reset() {
      this.text = ''
      this.stage = Object.assign(this.stage, {
        // 相对于窗口中心点的坐标偏移
        offset: {
          left: 0,
          top: 0,
        },
        // 画布旋转中心点
        origin: {
          left: 0,
          top: 0,
        },
        rotate: 0,
      })
      this.stage.offset.top = this.stage.reference.top
      this.stage.offset.left = this.stage.reference.left

      this.chapters = [
        { items: [], left: 0, top: 0, rotate: 0, direction: '' },
      ]
      this.forceStop = false
    },
    async wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }
  }
}
</script>

<style>
  @keyframes rotate-left
  {
    from { 
      transform: rotate(0); 
      transform-origin: top left;
    }
    to { 
      transform: rotate(90deg); 
      transform-origin: top left;
    }
  }

  @keyframes rotate-right
  {
    from { 
      transform: rotate(0); 
      transform-origin: top right;
    }
    to { 
      transform: rotate(-90deg); 
      transform-origin: top right;
    }
  }
</style>

<style scoped>
  .tv {
    /* 开发使用 便于查看整体文档结构 */
    /* width: 1000%;
    height: 1000%; */

    width: 100%;
    height: 100%;
    overflow: hidden;

    position: relative;
    background: #000;

    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* display: flex;
    align-items: center;
    justify-content: center; */

    transition: all 1s ease;
  }

  .tv .stage {
    /* 设置为正方形 以保证旋转中心点不变 仅用作旋转和偏移参考点 */
    width: 1px;
    height: 1px;

    /* 预留文字撑开位置 让内容居中  */
    /* margin-top: -200px;
    margin-left: -200px; */

    position: relative;

    transform: rotate(0) translate(0, 0);
    transition: transform 1s ease, left 1s ease, top 1s ease;
  }

  .tv .pointer {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50% 50%;
    background: #ff4949;
    box-shadow: 0px 0px 3px 3px #F56C6C;
    animation: my-breath .6s linear .5s infinite alternate;
  }

  .tv .chapter {
    position: absolute;
    width: fit-content;
  }

  /* 首行视为标题 */
  .tv .item.title {
    margin-bottom: 100px;
  }

  .tv .item {
    padding: 3px;
    font-weight: bold;
    letter-spacing: 3px;
    /* opacity: 0.9; */
    text-align: left;
  }

  .tv .item .shadow {
    position: relative;  
  }

  .tv .item .shadow:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 60%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
    animation: my-shadow 2s ease-in;
    /* background-color: rgba(79, 192, 141, 0.5); */
    background-color: #fff;
    opacity: 0.25;
  }

  .tv .item .shadow:hover:after {
    top: 0%;
  }
    
  @keyframes my-shadow
  {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes my-breath {
    0%   { opacity: 1.0; }
    100% { opacity: 0.5; }
  }
</style>
