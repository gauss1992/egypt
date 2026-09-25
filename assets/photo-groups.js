// Independently curated alternate sets; never shuffle the same photos into a fake new set.
// Retain creators' watermarks and link each image to its original public post.
const curatedPhotoGroups = { credits: {}, groups: {} };
[
  {
    key: 'abu-simbel', author: '黑里俏', post: '6968c4570000000022033e7d',
    postTitle: '在阿布辛贝留下可爱照片',
    photos: [
      ['abu-01', '巨像前回望', '身体侧向神庙，回头看镜头；让四尊坐像完整留在背景。'],
      ['abu-02', '扶帽的瞬间', '帽檐轻轻抬起，面部转向亮处；人物偏左，给巨像留出空间。'],
      ['abu-03', '浮雕旁的留白', '站在离墙一步的位置，让浮雕占上半幅；双臂自然展开，不触摸石壁。'],
      ['abu-04', '浅色裙与石壁', '身体微侧、视线看向画外，借浮雕横线稳定画面；人物不要紧贴墙面。'],
      ['abu-05', '柱厅里的趣味构图', '用前景框住脸，柱列落在背景中轴；道具并非团费包含，拍摄先确认允许。'],
      ['abu-06', '人与巨像的尺度', '把人物完整收入下方，头顶保留神庙立面；侧身回望，让人与巨像形成尺度对比。'],
      ['abu-07', '迎着镜头走来', '从不妨碍通行的位置缓慢走向摄影者；连拍捕捉裙摆，背景保留巨像轮廓。']
    ]
  },
  {
    key: 'kom-ombo', author: '爱旅行的设计师Genie', post: '69bd68c20000000021010605',
    postTitle: '阿斯旺到卢克索的第一站康翁波神庙',
    photos: [
      ['kom-01', '石柱前的全身像', '人物偏离中轴半步，身体轻侧；镜头放低一点，保留柱头。'],
      ['kom-02', '走进柱廊的光', '站在两根柱子之间的亮处，目光看向侧前方；用前景石柱增加纵深。'],
      ['kom-03', '仰看柱头', '补一张向上的细节照，让石柱沿画面两侧延伸，天空只留一小块。'],
      ['kom-04', '神庙全景', '先退到允许通行的开阔处拍全景；人像版把同伴放在下方一侧，衬托建筑尺度。']
    ]
  }
].forEach(set => {
  curatedPhotoGroups.groups[set.key] = [set.photos.map(([id, title, tip]) => {
    curatedPhotoGroups.credits[id] = {
      src: `assets/photo-groups/${id}.jpg`, author: set.author, platform: '小红书',
      source: `https://www.xiaohongshu.com/explore/${set.post}`, postTitle: set.postTitle
    };
    return { id, title, tip };
  })];
});
