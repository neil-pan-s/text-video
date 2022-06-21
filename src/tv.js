import Color from './color'
import Animation from './animation'

// 文字颜色
export const Colors = Color
// 文字动画
export const Animations = Animation

// 文字大小
export const Size = [ 48, 72, 96 ]
// 文字旋转方向 左旋、右旋、正常
export const Direction = [ 'left', 'right', 'normal' ]
// 文字下划线
export const Shadow = [ 'yes', 'no' ]
// 文字停滞时间
export const Duration = [ 500, 800, 1200 ]

// 样式系数 决定对应样式出现的概率
export const Ratio = {
  color: 0.7, 
  size: 0.5,
  duration: 0.5,
  animation: 0.6,
  shadow: 0.5,
  direction: 0.2,
}

export default class TextVideo {

  text 

  // 分割后的单行文字
  lines = []
  // 分割后的段落文字
  chapters = []
  
  // 播放遍历索引
  index = 0
  // 播放定时器句柄
  interval 

  // 播放时上一次旋转方向
  curDirection = 'normal'
  // 播放时上一次旋转行数 Index
  curIndex = 0

  limit = {
    // 单行文字最大长度
    length: 10,
    // 单个段落最大行数
    line: 5,
  }

  forceStop = false

  constructor(text) {
    this.text = text
    this.lines = this.split(text)
  }

  reset() {
    this.index = 0
    this.text = ''
    this.lines = []
    this.chapters = []
  }

  probability(percent) {
    return Math.random() <= percent
  }

  random(number) {
    return Math.round( Math.random() * number )
  }

  dice(ratio, arr) {
    if (!this.probability(ratio)) { return } 
    return arr[this.random(arr.length - 1)]
  }

  split(text) {
    const filters = [
      '\n', '\r',
      ',', '.', '?', '!', ';', ' ',
      '，', '。', '？', '！', '；', '　'
    ]

    let line = '', lines = []

    for(let s of text) {

      const isOverflow = line.length >= this.limit.length
      const isSeparator = filters.includes(s)

      if (isSeparator || isOverflow) { 
        if (line.length) {
          lines.push(line)
          line = isSeparator ? '' : s
        }

        continue
      }

      line += s
    }

    if (line.length) { lines.push(line) }

    return lines
  }

  hasNext() {
    return this.lines.length >= (this.index + 1) 
  }

  next() {
    return this.lines[this.index++]
  }

  direction() {
    let direction = this.dice(Ratio.direction, Direction) || ''

    if (!direction) { 

      // 避免段落过长
      if (this.index - this.curIndex >= this.limit.line) {
        this.curDirection = this.curDirection === 'normal' ?  this.dice(1.0, ['left', 'right']) : 'normal'
        this.curIndex = this.index

        return this.curDirection
      }

      return '' 
    }

    // 前三行内不允许旋转 即正常方向显示文字
    if (this.index - this.curIndex <= 3 && direction) { 
      return ''
    }

    // 首次旋转不能为 'normal' 尽可能右向延申内容
    if (!this.curDirection) {
      if (direction === 'normal') { direction = 'right' }
    } else {
      if (this.curDirection !== 'normal') {
        // 左右转后 下一旋转方向必须为normal 恢复文档方向
        direction = 'normal'
      } else {
        // 连续两次旋转方向不能同向 允许延申为斜线或环形
        if (direction === this.curDirection) {
          direction = this.dice(1.0, Direction.filter((item) => item !== this.curDirection))
        }
      }
    }

    this.curDirection = direction 
    this.curIndex = this.index

    return direction
  }

  process() {
    if (!this.hasNext()) { return }

    const text = this.next()

    const color = (this.dice(Ratio.color, Color) || { color: '#fff' }).color
    const size = this.dice(Ratio.size, Size) || 32
    const duration = this.dice(Ratio.duration, Duration) || 1000
    const animation = this.dice(Ratio.animation, Animation) || ''
    const shadow = this.dice(Ratio.shadow, Shadow) || 'no'
    const direction = this.direction() || ''

    const chapter = {
      text,
      color,
      size,
      direction, 
      duration,
      animation,
      shadow,
    }

    this.chapters.push(chapter)

    return chapter
  }

  play2(cb) {
    let timestamp, now, section

    this.interval = setInterval(async () => {

      now = new Date().getTime()

      if (!timestamp) { timestamp = now }

      // 保证文字停滞时间
      if (section && (timestamp + section.duration > now)) { 
        // console.log('waiting ...', timestamp, section.duration, now)
        return 
      }

      section = this.process()

      if (!section) {
        clearInterval(this.interval)
        return
      }

      timestamp = now
      cb(section)

    }, 200)
  }

  async wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async play(cb) {
    this.forceStop = false

    while(this.hasNext()) {
      if (this.forceStop) { break }

      const section = this.process()
      const duration = section.duration
      
      const handler = new Promise((next, cancel) => {
        cb(section, next, cancel) 
      })

      // 等待显示动画完成 + 保证文字停滞时间
      await Promise.all([ handler, this.wait(duration) ])
    }
  }

  stop() {
    this.forceStop = true
    clearInterval(this.interval)
    this.reset()
  }
}