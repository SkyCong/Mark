import coverImg from '../assets/img-loding.jpg'
import loginBg from '../assets/login_bg.jpg'
import aboutLogo from '../assets/about_logo.png'
import groupIcon from '../assets/discover_classify_group_icon.png'
import cinemaIcon from '../assets/discover_classify_cinema_icon.png'
import movieIcon from '../assets/tab_movies_checked.png'

const movies = [
  {
    id: 'm001',
    title: '星际穿越',
    originalTitle: 'Interstellar',
    year: '2014',
    genres: '剧情 / 科幻 / 冒险',
    pubdate: '2014-11-12 中国大陆上映',
    duration: '169 分钟',
    directors: '克里斯托弗·诺兰',
    writers: '乔纳森·诺兰 / 克里斯托弗·诺兰',
    casts: '马修·麦康纳 / 安妮·海瑟薇 / 杰西卡·查斯坦',
    rating: 9.4,
    summary: '地球环境逐渐恶化，一组宇航员穿越虫洞寻找人类未来的新家园。影片用宏大的科幻想象包裹亲情、时间与选择。',
    quote: '爱是一种力量，能让我们跨越时间和空间。',
    tag: '科幻经典'
  },
  {
    id: 'm002',
    title: '机器人总动员',
    originalTitle: 'WALL·E',
    year: '2008',
    genres: '科幻 / 动画 / 冒险',
    pubdate: '2008-06-27 美国上映',
    duration: '98 分钟',
    directors: '安德鲁·斯坦顿',
    writers: '安德鲁·斯坦顿 / 吉姆·里尔顿',
    casts: '本·贝尔特 / 艾丽莎·奈特 / 杰夫·格尔林',
    rating: 9.3,
    summary: '孤独的清洁机器人在废弃地球上日复一日工作，直到遇见来自太空的探测机器人，开启一段温柔又明亮的冒险。',
    quote: '废墟里也能长出一点点希望。',
    tag: '动画高分'
  },
  {
    id: 'm003',
    title: '盗梦空间',
    originalTitle: 'Inception',
    year: '2010',
    genres: '剧情 / 科幻 / 悬疑',
    pubdate: '2010-09-01 中国大陆上映',
    duration: '148 分钟',
    directors: '克里斯托弗·诺兰',
    writers: '克里斯托弗·诺兰',
    casts: '莱昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 玛丽昂·歌迪亚',
    rating: 9.4,
    summary: '造梦师潜入人的梦境窃取秘密，也接下一项几乎不可能的植入任务。多层梦境与情感执念交织成迷宫。',
    quote: '别害怕做一个稍微大一点的梦。',
    tag: '烧脑必看'
  },
  {
    id: 'm004',
    title: '千与千寻',
    originalTitle: '千と千尋の神隠し',
    year: '2001',
    genres: '剧情 / 动画 / 奇幻',
    pubdate: '2019-06-21 中国大陆重映',
    duration: '125 分钟',
    directors: '宫崎骏',
    writers: '宫崎骏',
    casts: '柊瑠美 / 入野自由 / 夏木真理',
    rating: 9.4,
    summary: '误入神灵世界的少女千寻，为救父母在浴场工作。成长、勇气与记忆在奇幻世界里慢慢展开。',
    quote: '名字不能丢，回家的路也不能忘。',
    tag: '治愈奇幻'
  },
  {
    id: 'm005',
    title: '疯狂动物城',
    originalTitle: 'Zootopia',
    year: '2016',
    genres: '喜剧 / 动画 / 冒险',
    pubdate: '2016-03-04 中国大陆上映',
    duration: '109 分钟',
    directors: '拜伦·霍华德 / 瑞奇·摩尔',
    writers: '杰拉德·布什 / 菲尔·约翰斯顿',
    casts: '金妮弗·古德温 / 杰森·贝特曼 / 夏奇拉',
    rating: 9.2,
    summary: '兔子警官和狐狸搭档调查城市失踪案，在偏见与梦想之间找到真正的答案。',
    quote: '试试看，也许会比想象中走得更远。',
    tag: '合家欢'
  },
  {
    id: 'm006',
    title: '绿皮书',
    originalTitle: 'Green Book',
    year: '2018',
    genres: '剧情 / 喜剧 / 传记',
    pubdate: '2019-03-01 中国大陆上映',
    duration: '130 分钟',
    directors: '彼得·法雷里',
    writers: '尼克·瓦莱隆加 / 布莱恩·海耶斯·库瑞',
    casts: '维果·莫腾森 / 马赫沙拉·阿里 / 琳达·卡德里尼',
    rating: 8.9,
    summary: '一位钢琴家与司机踏上巡演旅程，两个不同世界的人在路途中逐渐理解彼此。',
    quote: '体面不是别人给的，是自己守住的。',
    tag: '奥斯卡'
  }
]

const futureMovies = [
  {
    id: 'm101',
    title: '沙丘：预言之章',
    pubdate: '即将上映',
    duration: '156 分钟',
    genres: '科幻 / 冒险',
    directors: '丹尼斯·维伦纽瓦',
    rating: 8.7,
    summary: '延续宏大的沙丘宇宙，家族、信仰与命运继续在荒漠中交锋。'
  },
  {
    id: 'm102',
    title: '银河修复师',
    pubdate: '2026 待定',
    duration: '118 分钟',
    genres: '科幻 / 喜剧',
    directors: '原创项目',
    rating: 8.1,
    summary: '一群维修员在星际航线边缘拯救故障飞船，也修补自己的生活。'
  }
]

const normalizeMovie = (movie) => ({
  ...movie,
  alt: movie.title,
  images: {
    small: coverImg,
    large: coverImg
  },
  img_url: coverImg,
  imgUrl: coverImg,
  pubdates: movie.pubdate,
  durations: movie.duration,
  rating: {
    average: movie.rating
  }
})

const movieList = movies.map(normalizeMovie)
const comingSoonList = futureMovies.map(normalizeMovie)

const buildArticles = (page = 1) => movies.map((movie, index) => ({
  pubDate: `2026-05-${String(10 + index).padStart(2, '0')}-${page}`,
  object: {
    id: movie.id,
    title: `${movie.title}：${movie.tag}里的高分瞬间`,
    imgUrl: loginBg
  }
}))

const buildArticle = (id) => {
  const movie = movieList.find((item) => item.id === id) || movieList[0]

  return {
    articleTitle: `${movie.title}：为什么它值得被重新收藏`,
    pubDate: '2026-05-16',
    authorName: 'Mark 电影评分',
    imgUrl: loginBg,
    description: `${movie.title} 是一部适合在电影评分网站里长期沉淀的作品，它有清晰的类型标签、稳定的观众口碑，也适合做收藏与推荐。`,
    articleContent: `
      <p>评分：${movie.rating.average} 分</p>
      <p>${movie.summary}</p>
      <p>推荐理由：节奏完整，情绪落点清楚，适合作为首页内容流、详情页和搜索结果的 mock 样例。</p>
    `
  }
}

const buildDetail = (id) => {
  const movie = [...movieList, ...comingSoonList].find((item) => item.id === id) || movieList[0]

  return {
    ...movie,
    name: movie.title,
    photos: [loginBg, coverImg, aboutLogo],
    genres: movie.genres,
    directors: movie.directors,
    writers: movie.writers || movie.directors,
    casts: movie.casts || '主演阵容待公布'
  }
}

const searchMovies = (keyword = '', start = 0, count = 12) => {
  const key = String(keyword).trim().toLowerCase()
  const pool = [...movieList, ...comingSoonList]
  const matched = key
    ? pool.filter((item) => `${item.title}${item.originalTitle}${item.genres}${item.directors}${item.casts || ''}`.toLowerCase().includes(key))
    : pool

  return matched.slice(start, start + count)
}

const clone = (value) => JSON.parse(JSON.stringify(value))

const ok = (data) => ({
  data: clone(data),
  statusCode: 200,
  header: {},
  errMsg: 'request:ok'
})

export const getMockResponse = ({ url = '', data = {} }) => {
  if (url.includes('/channel/contents')) {
    return ok({ contentList: buildArticles(data.pageContext || 1) })
  }

  if (url.includes('/singles/banner')) {
    return ok({
      data: [
        { id: 'b001', name: '本周高分电影', img_url: loginBg },
        { id: 'b002', name: '科幻电影专题', img_url: coverImg },
        { id: 'b003', name: '影院热映榜', img_url: aboutLogo }
      ]
    })
  }

  if (url.includes('/movies/intheaters')) {
    return ok({ subjects: movieList })
  }

  if (url.includes('/movie/coming_soon')) {
    return ok({ subjects: comingSoonList })
  }

  if (url.includes('/movie/search')) {
    return ok({
      subjects: searchMovies(data.q, Number(data.start) || 0, Number(data.count) || 12)
    })
  }

  if (url.includes('/resources/lines')) {
    return ok({
      data: {
        word: '今晚看一部什么电影？',
        title: '从高分榜、导演、演员或类型开始搜索'
      }
    })
  }

  if (url.includes('/Mobile/movies/')) {
    return ok({ data: buildDetail(url.split('/').pop()) })
  }

  if (url.includes('/viewArt/artDetail/')) {
    return ok({ article: buildArticle(url.split('/').pop()) })
  }

  if (url.includes('/api/bins/1cb4p4')) {
    return ok({
      data: movieList.map((movie) => ({
        id: movie.id,
        img_url: movie.images.large,
        name: movie.title,
        content: movie.quote
      }))
    })
  }

  if (url.includes('/singles/groupcat')) {
    return ok({
      data: [
        {
          name: '类型',
          img_url: groupIcon,
          cat: [
            { id: 'genre-1', name: '科幻' },
            { id: 'genre-2', name: '动画' },
            { id: 'genre-3', name: '剧情' },
            { id: 'genre-4', name: '悬疑' },
            { id: 'genre-5', name: '喜剧' },
            { id: 'genre-6', name: '冒险' }
          ]
        },
        {
          name: '榜单',
          img_url: cinemaIcon,
          cat: [
            { id: 'rank-1', name: '高分榜' },
            { id: 'rank-2', name: '热映榜' },
            { id: 'rank-3', name: '即将上映' },
            { id: 'rank-4', name: '经典重映' },
            { id: 'rank-5', name: '奥斯卡' },
            { id: 'rank-6', name: '华语佳片' }
          ]
        },
        {
          name: '地区',
          img_url: movieIcon,
          cat: [
            { id: 'area-1', name: '华语' },
            { id: 'area-2', name: '欧美' },
            { id: 'area-3', name: '日本' },
            { id: 'area-4', name: '韩国' },
            { id: 'area-5', name: '印度' },
            { id: 'area-6', name: '其他' }
          ]
        }
      ]
    })
  }

  if (url.includes('localhost:9000/data')) {
    return ok(movieList.map((movie) => ({
      id: movie.id,
      name: movie.title,
      img_url: loginBg
    })))
  }

  return null
}
