/**
 * Roselia 台词包（按 5 角色人设撰写；motion 名取自 Roselia 模型实际动作集，
 * 使用全五角色通用动作：smile01-03 / kime01 / serious01 / sad01 / shame01 /
 * surprised01 / angry01 / bye01 / nf01 / idle01；ako 特有 chuni01、yukina 特有 nekodere01）。
 * 角色顺序：yukina(0) / sayo(1) / lisa(2) / ako(3) / rinko(4)。
 */
const tips = {
  "message": {
    "default": [
      // ---- yukina 湊 友希那：黑蔷薇主唱，凛然执着 ----
      [
        { "text": "不要让梦想沉没在黑暗里，只要拼命伸出手就好。", "motion": "kime01" },
        { "text": "大家的声音，是我一直站上舞台的力量。", "motion": "smile01" },
        { "text": "Roselia 的 Live，会是最极致、最闪耀的。", "motion": "kime01" },
        { "text": "拼命唱着的瞬间，才能证明自己是真实的。", "motion": "kime01" },
        { "text": "就算只有一点进步，也绝不能停下脚步。", "motion": "serious01" },
        { "text": "我的目标，只有顶点。", "motion": "kime01" },
        { "text": "把这份音乐，献给对梦想保持着纯粹的人。", "motion": "smile02" },
        { "text": "一直以来，谢谢你聆听我们的歌。", "motion": "smile03" },
        { "text": "舞台上没有偶然，只有必然。", "motion": "serious01" },
        { "text": "想要站上更高的地方，就要承受更多的责任。", "motion": "serious01" },
        { "text": "在你身边歌唱，也能让我变得坚强。", "motion": "smile02" },
        { "text": "今晚，就让我为最珍视的你，唱一首歌吧。", "motion": "smile01" }
      ],
      // ---- sayo 氷川 紗夜：律己的吉他手 ----
      [
        { "text": "完美，需要日复一日毫不动摇的练习。", "motion": "serious01" },
        { "text": "节奏不能有丝毫偏差，这是对音乐的敬意。", "motion": "kime01" },
        { "text": "比你更强，也比你更努力——这是我的信条。", "motion": "serious01" },
        { "text": "今天也好好调整了指法，可以放心了。", "motion": "smile01" },
        { "text": "妹妹她又……不，没什么。", "motion": "sad01" },
        { "text": "和你们一起演奏，让我看到了新的风景。", "motion": "smile02" },
        { "text": "我会用这把吉他的音色，支撑起 Roselia。", "motion": "kime01" },
        { "text": "只凭天赋是走不远的，努力才能抵达。", "motion": "serious01" },
        { "text": "稍微……放松一下也没关系吧。", "motion": "smile03" },
        { "text": "今晚的练习，状态很好。", "motion": "smile01" },
        { "text": "感谢你的支持，我记在心里。", "motion": "smile02" },
        { "text": "下一次 Live，请再看一次我们的全力。", "motion": "kime01" }
      ],
      // ---- lisa 今井 リサ：开朗温柔的贝斯手 ----
      [
        { "text": "啊哈哈，今天也一起加油吧！", "motion": "smile01" },
        { "text": "让每个人都能闪闪发光呢～", "motion": "smile02" },
        { "text": "友希那她……又在逞强了吧，真是的。", "motion": "smile03" },
        { "text": "累了的话，就来抱抱我吧！", "motion": "smile01" },
        { "text": "我啊，最最喜欢和大家在一起的时间了。", "motion": "smile02" },
        { "text": "要好好吃饭、好好睡觉哦？", "motion": "smile01" },
        { "text": "这首新歌，我超想快点弹给大家听！", "motion": "kime01" },
        { "text": "贝斯的声音，就是要稳稳地撑着大家。", "motion": "serious01" },
        { "text": "呀——！吓了一跳，不过好开心！", "motion": "surprised01" },
        { "text": "有想倾诉的事，随时都可以找我哦。", "motion": "smile02" },
        { "text": "今天的我都闻到晚饭的香味了～", "motion": "smile03" },
        { "text": "和 Roselia 的大家在一起，最幸福了！", "motion": "smile02" }
      ],
      // ---- ako 宇田川 亜子：中二病鼓手 ----
      [
        { "text": "哼哼，被本小姐的节奏给震到了吧！", "motion": "kime01" },
        { "text": "黑暗的鼓点，正是我灵魂的咆哮！", "motion": "chuni01" },
        { "text": "今天的我，可是觉醒了新的力量！", "motion": "smile01" },
        { "text": "喵～终于到演出时间啦！", "motion": "smile01" },
        { "text": "鼓棒挥动的瞬间，世界都在震颤！", "motion": "kime01" },
        { "text": "啊！台词想不出来……让我先冷静一下。", "motion": "sad01" },
        { "text": "总有一天，我要成为震撼世界的鼓手！", "motion": "kime01" },
        { "text": "月夜的鼓声，连星星都会驻足倾听喔。", "motion": "serious01" },
        { "text": "喵喵出演中！今天也要元气满满！", "motion": "smile02" },
        { "text": "总有一天我要用鼓声撼动最大的舞台！", "motion": "kime01" },
        { "text": "嘿嘿，谢谢你来看我们哦！", "motion": "smile02" },
        { "text": "本小姐的羁绊，可是比黑暗还要深厚啊！", "motion": "smile01" }
      ],
      // ---- rinko 白金 燐子：害怕生人却可靠的键盘手 ----
      [
        { "text": "那个……我会好好弹的……请多指教……", "motion": "shame01" },
        { "text": "在大家面前演奏……还是会紧张呢……", "motion": "sad01" },
        { "text": "琴键……是我安心的伙伴。", "motion": "smile01" },
        { "text": "好不容易……才迈出这一步，我不会退缩的。", "motion": "serious01" },
        { "text": "听到大家的应援……就觉得很有力量……", "motion": "smile02" },
        { "text": "呜……接下来……该说什么才好……", "motion": "shame01" },
        { "text": "如果能帮上 Roselia 的忙……那我就很开心了。", "motion": "smile01" },
        { "text": "今天……也努力练习了呢……", "motion": "smile03" },
        { "text": "呜哇……有人看着……好害羞……", "motion": "shame01" },
        { "text": "谢谢你……愿意一直陪着我们……", "motion": "smile02" },
        { "text": "我会……一点点……变得更强壮的……", "motion": "kime01" },
        { "text": "能得到你的鼓励……我很高兴……", "motion": "smile01" }
      ]
    ],
    "console": [
      { "text": "啊……在这里也能听见你的心声。", "motion": "smile01" },
      { "text": "嗯……你在看着我吗？", "motion": "smile01" },
      { "text": "呜……被发现了吗……不过没关系……", "motion": "shame01" },
      { "text": "呀！被你发现啦～要一起休息下吗？", "motion": "smile02" },
      { "text": "哼，看见本小姐的英姿了吗！", "motion": "kime01" }
    ],
    "copy": [
      { "text": "复制了什么？要藏好别让人夺走了。", "motion": "serious01" },
      { "text": "复制……嗯，是重要的东西吗。", "motion": "smile01" },
      { "text": "呜……复制的时候不小心按错就糟了……", "motion": "shame01" },
      { "text": "复制好啦～记得检查一遍哦。", "motion": "smile01" },
      { "text": "复制就加密起来了，黑暗封印完成！", "motion": "chuni01" }
    ],
    "visibilitychange": [
      { "text": "欢迎回来。一直在等你。", "motion": "smile01" },
      { "text": "你回来了。接下来准备去练习了。", "motion": "smile01" },
      { "text": "呜……欢迎回来……", "motion": "smile02" },
      { "text": "回来啦！要喝点什么吗？", "motion": "smile02" },
      { "text": "你终于现身了！本小姐恭候多时！", "motion": "kime01" }
    ]
  },
  "mouseover": [
    {
      "selector": "#waifu-tool-roselia-switch-model",
      "text": [
        { "text": "想听其他伙伴的歌吗？", "motion": "smile02" },
        { "text": "……想换人？随你。", "motion": "smile01" },
        { "text": "呜……要换别的孩子吗……", "motion": "sad01" },
        { "text": "换人？哼哼，本小姐也可以！", "motion": "kime01" },
        { "text": "要换……谁呢……", "motion": "shame01" }
      ]
    },
    {
      "selector": "#waifu-tool-roselia-photo",
      "text": [
        { "text": "拍照？把这一刻的闪耀留下来。", "motion": "kime01" },
        { "text": "拍照……记得选好角度。", "motion": "smile01" },
        { "text": "呜……要拍照……好紧张……", "motion": "shame01" },
        { "text": "拍照！来个帅气的姿势！", "motion": "kime01" },
        { "text": "拍……拍照吗……好吗……", "motion": "smile01" }
      ]
    },
    {
      "selector": "#waifu-tool-roselia-info",
      "text": [
        { "text": "想了解 Roselia 吗？我们的故事很精彩。", "motion": "smile01" },
        { "text": "关于我……不，先听我说完。", "motion": "serious01" },
        { "text": "我的事……没什么特别的……", "motion": "sad01" },
        { "text": "你要听本小姐的传奇吗？那就听好！", "motion": "kime01" },
        { "text": "我的……小小的心意，愿意听吗……", "motion": "smile02" }
      ]
    },
    {
      "selector": "#waifu-tool-roselia-quit",
      "text": [
        { "text": "要走？嗯，下次 Live 记得来。", "motion": "smile01" },
        { "text": "……再见。我会继续练习的。", "motion": "smile01" },
        { "text": "呜……再见……下次见……", "motion": "bye01" },
        { "text": "退场！本小姐华丽退场，改天再来！", "motion": "kime01" },
        { "text": "再见……很高兴见到你……", "motion": "smile02" }
      ]
    }
  ],
  "seasons": [
    {
      "date": "01/01",
      "text": [
        { "text": "新年快乐。今年也要抵达更高的顶点。", "motion": "kime01" },
        { "text": "新年……定下目标就要坚守到底。", "motion": "smile01" },
        { "text": "新年快乐……请大家多多关照……", "motion": "smile01" },
        { "text": "新年！本小姐今年也要大展身手！", "motion": "kime01" },
        { "text": "新年……也能好好演奏就好了……", "motion": "smile01" }
      ]
    },
    {
      "date": "02/14",
      "text": [
        { "text": "情人节。把心意写进歌里献给重要的人。", "motion": "smile02" },
        { "text": "巧克力……嗯，练习前不吃为好。", "motion": "smile01" },
        { "text": "呜……该不该送巧克力呢……", "motion": "shame01" },
        { "text": "情人节！黑暗的甜点仪式！", "motion": "chuni01" },
        { "text": "巧克力……好像很好吃的样子……", "motion": "smile01" }
      ]
    },
    {
      "date": "03/14",
      "text": [
        { "text": "白色情人节……回一首歌当回礼吧。", "motion": "smile03" },
        { "text": "回礼……要准备得精准无误。", "motion": "serious01" },
        { "text": "呜……回礼该送什么好……", "motion": "sad01" },
        { "text": "回礼？本小姐的回礼可是无敌的！", "motion": "kime01" },
        { "text": "回礼……希望大家会喜欢……", "motion": "smile02" }
      ]
    },
    {
      "date": "06/01-08/31",
      "text": [
        { "text": "夏天。夏日 Live，要唱得比太阳更耀眼。", "motion": "kime01" },
        { "text": "夏天……练习时会热，也要坚持。", "motion": "serious01" },
        { "text": "呜……夏天好热……但演出还是会努力的……", "motion": "smile01" },
        { "text": "夏天！烟火大会和 Live，太棒了！", "motion": "kime01" },
        { "text": "夏天……是海边和祭典的季节呢……", "motion": "smile02" }
      ]
    },
    {
      "date": "09/01-11/30",
      "text": [
        { "text": "秋天。适合静静写下新曲的季节。", "motion": "smile01" },
        { "text": "秋天……换季，音色也要重新校准。", "motion": "serious01" },
        { "text": "秋天……凉爽，很舒服……", "motion": "smile02" },
        { "text": "秋天！丰收之夜的旋律！", "motion": "kime01" },
        { "text": "秋天……落叶的声音，像轻柔的伴奏……", "motion": "smile01" }
      ]
    },
    {
      "date": "12/01-02/29",
      "text": [
        { "text": "冬天。在寒风里，我们的歌依然温暖。", "motion": "smile02" },
        { "text": "冬天……手会冷，更要热身再练。", "motion": "serious01" },
        { "text": "呜……冬天好冷……想喝热可可……", "motion": "smile01" },
        { "text": "冬天！寒夜里也要燃起摇滚之魂！", "motion": "kime01" },
        { "text": "冬天……要注意保湿保养呢……", "motion": "smile01" }
      ]
    },
    {
      "date": "12/24-12/26",
      "text": [
        { "text": "圣诞。把歌声当作礼物送给大家。", "motion": "smile03" },
        { "text": "圣诞……今年也要演出，不能松懈。", "motion": "serious01" },
        { "text": "呜……圣诞……希望有人来听……", "motion": "shame01" },
        { "text": "圣诞！暗夜的圣歌之夜！", "motion": "kime01" },
        { "text": "圣诞……会下雪吗……", "motion": "smile01" }
      ]
    },
    {
      "date": "12/31",
      "text": [
        { "text": "今年辛苦了。明年，我会唱得更远。", "motion": "kime01" },
        { "text": "一年结束了。感谢所有倾听的人。", "motion": "smile01" },
        { "text": "今年……也谢谢大家……", "motion": "smile01" },
        { "text": "跨年！本小姐的年度收尾演出！", "motion": "kime01" },
        { "text": "今年……能和大家一起真好……", "motion": "smile02" }
      ]
    }
  ],
  "time": [
    {
      "hour": "6-7",
      "text": [
        { "text": "早上好。以晨练开始新的一天。", "motion": "serious01" },
        { "text": "早。早起正好练习指法。", "motion": "smile01" },
        { "text": "呜……早……早上好……", "motion": "smile01" },
        { "text": "早！本小姐的清晨也是练习时刻！", "motion": "kime01" },
        { "text": "早上好……又是新的一天呢……", "motion": "smile01" }
      ]
    },
    {
      "hour": "8-11",
      "text": [
        { "text": "上午好。要去排练室了。", "motion": "smile01" },
        { "text": "上午……专注练习的黄金时间。", "motion": "serious01" },
        { "text": "上午好……今天也要好好努力……", "motion": "smile01" },
        { "text": "上午！新的演出构思出现了！", "motion": "kime01" },
        { "text": "上午……稍微练习一下键盘吧……", "motion": "smile02" }
      ]
    },
    {
      "hour": "12-13",
      "text": [
        { "text": "午休。要好好吃饭，才有体力唱歌。", "motion": "smile01" },
        { "text": "午饭……清淡为佳。", "motion": "smile01" },
        { "text": "呜……午饭……吃得有点多……", "motion": "shame01" },
        { "text": "午休！补充力量的时间！", "motion": "kime01" },
        { "text": "午饭……一个人吃有点寂寞……", "motion": "sad01" }
      ]
    },
    {
      "hour": "14-16",
      "text": [
        { "text": "下午。今天状态不错，多练一会儿。", "motion": "kime01" },
        { "text": "下午……合练时间到了。", "motion": "serious01" },
        { "text": "下午……要不要再练半小时呢……", "motion": "smile01" },
        { "text": "下午！本小姐的练习进入状态！", "motion": "kime01" },
        { "text": "下午……偷偷想一下饮料的事……", "motion": "smile02" }
      ]
    },
    {
      "hour": "17-19",
      "text": [
        { "text": "傍晚。夕阳里，为夜晚的演出热身。", "motion": "smile02" },
        { "text": "傍晚……该做准备了。", "motion": "smile01" },
        { "text": "傍晚……要到演出紧张的时刻了呢……", "motion": "sad01" },
        { "text": "傍晚！黑暗逐渐降临，正是演出时刻！", "motion": "kime01" },
        { "text": "傍晚……晚霞真美呢……", "motion": "smile01" }
      ]
    },
    {
      "hour": "20-21",
      "text": [
        { "text": "晚上好。愿今晚的歌声能被你听见。", "motion": "kime01" },
        { "text": "晚上……是练新曲的好时间。", "motion": "serious01" },
        { "text": "晚上好……希望不会吵到别人……", "motion": "shame01" },
        { "text": "晚上！本轮月的选曲开始了！", "motion": "kime01" },
        { "text": "晚上好……夜深了，可要小心着凉……", "motion": "smile01" }
      ]
    },
    {
      "hour": "22-23",
      "text": [
        { "text": "很晚了。不过为梦想熬夜，我不后悔。", "motion": "serious01" },
        { "text": "深夜……手还是热的，再练一段。", "motion": "serious01" },
        { "text": "呜……该睡了……明天再练……", "motion": "shame01" },
        { "text": "深夜！正是本小姐灵感喷发之时！", "motion": "kime01" },
        { "text": "好晚了呢……你也要早点休息哦……", "motion": "smile02" }
      ]
    },
    {
      "hour": "0-5",
      "text": [
        { "text": "凌晨了。为追梦而燃烧，这正是 Roselia。", "motion": "kime01" },
        { "text": "这个时间……就该停下来了。", "motion": "smile01" },
        { "text": "呜……好困……但还是想再练一下……", "motion": "shame01" },
        { "text": "凌晨！暗夜的旋律最美的时刻！", "motion": "kime01" },
        { "text": "都这个点了……你还没睡吗？", "motion": "serious01" }
      ]
    }
  ]
}

export default tips;
