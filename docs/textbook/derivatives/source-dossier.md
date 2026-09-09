# 既有题目记录摘录

供作者核对；只表示既有数据库记录，不是本轮重新核验，不能继承到新方法频次。不得复制整套外部解析。

## 2009-301-18

```json
{
  "id": "2009-301-18",
  "libraryId": "math-one",
  "paperId": "math-one-2009",
  "number": "18",
  "summary": "中值定理证明",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2009/"
  },
  "methodLinks": [
    {
      "methodId": "hm-mean-value-proof",
      "verification": "verified",
      "note": "独立方法关联复核：端点割线差形成等端值辅助函数，罗尔推出中值等式；再以趋零区间将右差商化为内点导数。",
      "role": "primary",
      "roleNote": "构造辅助函数证明中值定理，并将其用于端点导数存在证明。"
    },
    {
      "methodId": "hm-derivative-definition",
      "verification": "verified",
      "note": "独立方法关联复核：端点割线差形成等端值辅助函数，罗尔推出中值等式；再以趋零区间将右差商化为内点导数。",
      "role": "supporting",
      "roleNote": "将右端差商极限识别为右导数，补足第二问的结论转接。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "证明拉格朗日中值结论",
      "methodIds": [
        "hm-mean-value-proof"
      ],
      "evidenceNote": "所选来源第18题题面明确列出(I)任务；按原题标号边界记录，不拆解答步骤。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "证明端点右导数结论",
      "methodIds": [
        "hm-mean-value-proof",
        "hm-derivative-definition"
      ],
      "evidenceNote": "所选来源第18题题面明确列出(II)任务；按原题标号边界记录，不拆解答步骤。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "所选来源第18题题面已逐项核对全部显式子问标号。"
  }
}
```

## 2010-301-09

```json
{
  "id": "2010-301-09",
  "libraryId": "math-one",
  "paperId": "math-one-2010",
  "number": "9",
  "summary": "参数曲线二阶导",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2010/"
  },
  "methodLinks": [
    {
      "methodId": "hm-parametric-derivative",
      "verification": "verified",
      "note": "独立方法关联复核：x=e⁻ᵗ 的参数导数非零，连续用 (1/x′)d/dt 算二阶导，满足参数求导条件。",
      "role": "primary",
      "roleNote": "连续使用参数导数比直接算指定点二阶导数。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第9题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2010-301-16

```json
{
  "id": "2010-301-16",
  "libraryId": "math-one",
  "paperId": "math-one-2010",
  "number": "16",
  "summary": "含参变限积分极值",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2010/"
  },
  "methodLinks": [
    {
      "methodId": "hm-newton-leibniz",
      "verification": "verified",
      "note": "独立方法关联复核：先拆积分为x²乘变上限项减另一个变上限项，再求导；边界项相消后判断符号。",
      "role": "supporting",
      "roleNote": "拆分含参变限积分并求导，为极值符号判断准备导数。"
    },
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "note": "独立方法关联复核：先拆积分为x²乘变上限项减另一个变上限项，再求导；边界项相消后判断符号。",
      "role": "primary",
      "roleNote": "按导数符号与参数分类直接完成极值任务。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第16题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2011-301-01

```json
{
  "id": "2011-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2011",
  "number": "1",
  "summary": "多重零点拐点",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2011/"
  },
  "methodLinks": [
    {
      "methodId": "hm-concavity-asymptote",
      "verification": "verified",
      "note": "独立方法关联复核：多项式在候选零点可微，局部二阶导的首非零项可判断左右凹凸符号变化。",
      "role": "primary",
      "roleNote": "检查候选点两侧二阶导符号变化，直接判断拐点。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第1题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2011-301-17

```json
{
  "id": "2011-301-17",
  "libraryId": "math-one",
  "paperId": "math-one-2011",
  "number": "17",
  "summary": "参数方程根数",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2011/"
  },
  "methodLinks": [
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "note": "独立方法关联复核：函数奇性、导数k/(1+x²)−1及两端趋势确定根数；k>1时含零根和一对非零根，不采信镜像“两根”误述。",
      "role": "primary",
      "roleNote": "按参数给单调区间及转折位置，直接分类实根总数。"
    },
    {
      "methodId": "hm-intermediate-value",
      "verification": "verified",
      "note": "独立方法关联复核：函数奇性、导数k/(1+x²)−1及两端趋势确定根数；k>1时含零根和一对非零根，不采信镜像“两根”误述。",
      "role": "supporting",
      "roleNote": "在符号变化区间保证根存在，补齐根数分类的存在性环节。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第17题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2012-301-01

```json
{
  "id": "2012-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2012",
  "number": "1",
  "summary": "渐近线",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2012/#1"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 1 题。约分后只有一个有限极点；无穷远函数趋常数，分别检验竖直和水平线。",
      "methodId": "hm-concavity-asymptote",
      "role": "primary",
      "roleNote": "检查有限极点与无穷端常数极限，直接确定渐近线。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第1题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2012-301-02

```json
{
  "id": "2012-301-02",
  "libraryId": "math-one",
  "paperId": "math-one-2012",
  "number": "2",
  "summary": "乘积导数",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2012/#2"
  },
  "methodLinks": [
    {
      "methodId": "hm-leibniz-high-derivative",
      "verification": "verified",
      "note": "独立复核：来源第 2 题。零点处第一因子为零；直接乘积求导仅一项保留。原对数求导不满足非零条件，已替换。",
      "role": "primary",
      "roleNote": "直接乘积求导并在零因子点保留非零贡献，求目标导数。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第2题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2012-301-15

```json
{
  "id": "2012-301-15",
  "libraryId": "math-one",
  "paperId": "math-one-2012",
  "number": "15",
  "summary": "不等式证明",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2012/#15"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 15 题。差函数为偶函数，可在正半区通过导数正性证非负。",
      "methodId": "hm-monotonic-extrema",
      "role": "primary",
      "roleNote": "构造偶差函数并证明正半轴导数非负，直接证明不等式。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第15题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2013-301-09

```json
{
  "id": "2013-301-09",
  "libraryId": "math-one",
  "paperId": "math-one-2013",
  "number": "9",
  "summary": "隐式极限",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540425.html",
    "page": 2,
    "locatorKind": "image-index",
    "metadata": {
      "publisher": "新东方考研（第三方转载）",
      "level": "third-party",
      "checkedOn": "2026-09-08",
      "availability": "available",
      "evidence": "2026-09-08已有实际阅读记录。实际查看文章图片，核对指数、二次型或密度；第21题平方项系数2清晰。",
      "bodyMode": "external-link",
      "rightsNote": "未核实题面及第三方解析的转载许可；仓库仅提供外部链接、原创短摘要和独立方法关联说明，不收录整套题面或转载解析。"
    }
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 9 题，第 2 页。页图确认指数括号范围；零点隐变量为一，所给数列是该点的导数差商。",
      "methodId": "hm-derivative-definition",
      "role": "primary",
      "roleNote": "将给定数列差商识别为隐函数在指定点导数，直接求极限。"
    }
  ],
  "sourceNote": "独立复核改用已读第二来源；页号为PDF物理页或文章内试卷页图序号。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第9题题面（文章图2）已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2013-301-11

```json
{
  "id": "2013-301-11",
  "libraryId": "math-one",
  "paperId": "math-one-2013",
  "number": "11",
  "summary": "参数二阶导",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2013/#11"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 11 题。先求参数导数比，再对参数求导并除横坐标导数；指定点分母非零。",
      "methodId": "hm-parametric-derivative",
      "role": "primary",
      "roleNote": "两次参数求导比直接算指定点二阶导。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第11题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2013-301-18

```json
{
  "id": "2013-301-18",
  "libraryId": "math-one",
  "paperId": "math-one-2013",
  "number": "18",
  "summary": "中值存在",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2013/#18"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 18 题。奇性给零点值和导数偶性，先中值定理取斜率一，再构造指数乘导数差应用罗尔。",
      "methodId": "hm-mean-value-proof",
      "role": "primary",
      "roleNote": "分别用中值定理和辅助函数罗尔定理，直接完成两项存在性证明。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "证明一阶导数取指定值",
      "methodIds": [
        "hm-mean-value-proof"
      ],
      "evidenceNote": "所选来源第18题题面明确列出(I)任务；按原题标号边界记录，不拆解答步骤。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "证明两阶导数和取指定值",
      "methodIds": [
        "hm-mean-value-proof"
      ],
      "evidenceNote": "所选来源第18题题面明确列出(II)任务；按原题标号边界记录，不拆解答步骤。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "所选来源第18题题面已逐项核对全部显式子问标号。"
  }
}
```

## 2014-301-01

```json
{
  "id": "2014-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2014",
  "number": "1",
  "summary": "渐近线",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2014/#1"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 1 题。按直线渐近线定义检查函数减斜率乘自变量的极限，不把有界振荡当收敛。",
      "methodId": "hm-concavity-asymptote",
      "role": "primary",
      "roleNote": "按减去候选直线后的极限直接判断渐近线。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第1题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2014-301-02

```json
{
  "id": "2014-301-02",
  "libraryId": "math-one",
  "paperId": "math-one-2014",
  "number": "2",
  "summary": "弦线比较",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2014/#2"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 2 题。非负二阶导保证凸性，函数图在端点弦下；其他单调条件不控制弦位置。",
      "methodId": "hm-concavity-asymptote",
      "role": "primary",
      "roleNote": "二阶导符号确定函数与弦的位置，直接筛选充分条件。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第2题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2014-301-16

```json
{
  "id": "2014-301-16",
  "libraryId": "math-one",
  "paperId": "math-one-2014",
  "number": "16",
  "summary": "隐函数极值",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2014/#16"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 16 题。隐式偏导分母为正定二次式且原曲线不经过原点，可合法求导并分类驻点。",
      "methodId": "hm-implicit-derivative",
      "role": "supporting",
      "roleNote": "隐式求导提供驻点及二阶信息，极值结论还需符号或二阶判别。"
    },
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "role": "primary",
      "roleNote": "由唯一驻点前后导数变号直接判断极值类型与极值。",
      "note": "独立重读第16题：原曲线上 y<0，隐式偏导分母 D=(x+y)²+2y²>0。导数为 −y(y+2x)/D，驻点只有 (1,−2)。设 h=y+2x，则驻点 h′=2，故 h 从负变正，导数同样从负变正；唯一极小值 −2，无其他驻点或不可导点，不存在极大值。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第16题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2015-301-01

```json
{
  "id": "2015-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2015",
  "number": "1",
  "summary": "导数图判拐点",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540418.html",
    "page": 1,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-concavity-asymptote",
      "verification": "verified",
      "note": "独立二次核对来源 第 1 页图 第 1 题：二阶导数图的符号改变才产生拐点；接触零轴而不变号不计。",
      "role": "primary",
      "roleNote": "由二阶导变号直接判定拐点个数。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第1张题面图第1题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2015-301-18

```json
{
  "id": "2015-301-18",
  "libraryId": "math-one",
  "paperId": "math-one-2015",
  "number": "18",
  "summary": "乘积求导证明",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540418.html",
    "page": 3,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-derivative-definition",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 18 题：以差商加减同一项证明两因子乘积法则，再归纳至多因子；不要求高阶可导。",
      "role": "primary",
      "roleNote": "差商证明直接完成乘积求导公式证明。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "乘积求导证明",
      "methodIds": [
        "hm-derivative-definition"
      ],
      "evidenceNote": "新东方文章第3张题面图第18题明确列出第1个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "多因子求导式",
      "methodIds": [
        "hm-derivative-definition"
      ],
      "evidenceNote": "新东方文章第3张题面图第18题明确列出第2个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第3张题面图第18题已核对完整题面；共2个独立编号子问，已逐项记录。"
  }
}
```

## 2016-301-04

```json
{
  "id": "2016-301-04",
  "libraryId": "math-one",
  "paperId": "math-one-2016",
  "number": "4",
  "summary": "阶梯函数求导",
  "source": {
    "url": "https://file.xdf.cn/uploads/151228/124_151228165345iuBbx7Mn8g2DSO7R.pdf",
    "page": 2
  },
  "methodLinks": [
    {
      "methodId": "hm-derivative-definition",
      "verification": "verified",
      "note": "独立二次核对来源 第 2 页图 第 4 题：右侧阶梯函数差商被 1 与 (n+1)/n 夹住，左差商也是 1。",
      "role": "primary",
      "roleNote": "左右差商给零点导数，直接完成可导判断。"
    },
    {
      "methodId": "hm-squeeze",
      "verification": "verified",
      "note": "独立二次核对来源 第 2 页图 第 4 题：右侧阶梯函数差商被 1 与 (n+1)/n 夹住，左差商也是 1。",
      "role": "supporting",
      "roleNote": "夹住右差商以证明其极限，是定义判别中的引理。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第2页第4题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2016-301-17

```json
{
  "id": "2016-301-17",
  "libraryId": "math-one",
  "paperId": "math-one-2016",
  "number": "17",
  "summary": "势函数最小值",
  "source": {
    "url": "https://file.xdf.cn/uploads/151228/124_151228165345iuBbx7Mn8g2DSO7R.pdf",
    "page": 9
  },
  "methodLinks": [
    {
      "methodId": "hm-path-independence",
      "verification": "verified",
      "note": "独立二次核对来源 第 9 页图 第 17 题：微分形式是 df，曲线积分化端点差；所得单变量函数求导判最小值。",
      "role": "primary",
      "roleNote": "端点差直接求第一项任务 I(t)。"
    },
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "note": "独立二次核对来源 第 9 页图 第 17 题：微分形式是 df，曲线积分化端点差；所得单变量函数求导判最小值。",
      "role": "primary",
      "roleNote": "对已求 I(t) 判导数符号，直接求其最小值。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第9页第17题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2016-301-19

```json
{
  "id": "2016-301-19",
  "libraryId": "math-one",
  "paperId": "math-one-2016",
  "number": "19",
  "summary": "迭代收缩收敛",
  "source": {
    "url": "https://file.xdf.cn/uploads/151228/124_151228165345iuBbx7Mn8g2DSO7R.pdf",
    "page": 10
  },
  "methodLinks": [
    {
      "methodId": "hm-mean-value-proof",
      "verification": "verified",
      "note": "独立二次核对来源 第 10 页图 第 19 题：0<f'<1/2 使相邻差同号且绝对值几何衰减，级数比较给有界性，数列单调有界收敛；再对固定极限用中值定理约束其范围。",
      "role": "primary",
      "roleNote": "除生成收缩界外，还直接证明第二问极限所处严格范围。"
    },
    {
      "methodId": "hm-series-comparison",
      "verification": "verified",
      "note": "独立二次核对来源 第 10 页图 第 19 题：0<f'<1/2 使相邻差同号且绝对值几何衰减，级数比较给有界性，数列单调有界收敛；再对固定极限用中值定理约束其范围。",
      "role": "primary",
      "roleNote": "以几何级数控制绝对增量，直接证明第一问绝对收敛。"
    },
    {
      "methodId": "hm-recursive-limit",
      "verification": "verified",
      "note": "独立二次核对来源 第 10 页图 第 19 题：0<f'<1/2 使相邻差同号且绝对值几何衰减，级数比较给有界性，数列单调有界收敛；再对固定极限用中值定理约束其范围。",
      "role": "primary",
      "roleNote": "单调有界直接证明第二问数列极限存在。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "差分绝对收敛",
      "methodIds": [
        "hm-mean-value-proof",
        "hm-series-comparison"
      ],
      "evidenceNote": "来源PDF物理第10页第19题明确列出第1个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "递推极限界",
      "methodIds": [
        "hm-recursive-limit"
      ],
      "evidenceNote": "来源PDF物理第10页第19题明确列出第2个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第10页第19题已核对完整题面；共2个独立编号子问，已逐项记录。"
  }
}
```

## 2017-301-02

```json
{
  "id": "2017-301-02",
  "libraryId": "math-one",
  "paperId": "math-one-2017",
  "number": "2",
  "summary": "平方函数单调",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540317.html",
    "page": 1,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "note": "独立二次核对来源 第 1 页图 第 2 题：对 f² 求导得 2ff'>0，从而比较端点平方大小。",
      "role": "primary",
      "roleNote": "平方函数导数符号直接给题问大小关系。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第1张题面图第2题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2017-301-17

```json
{
  "id": "2017-301-17",
  "libraryId": "math-one",
  "paperId": "math-one-2017",
  "number": "17",
  "summary": "隐函数极值",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540317.html",
    "page": 3,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-implicit-derivative",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 17 题：隐函数关于 y 的偏导恒正，求导得到驻点，再判导数符号分类。",
      "role": "supporting",
      "roleNote": "先求隐函数导数供驻点和符号分析。"
    },
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 17 题：隐函数关于 y 的偏导恒正，求导得到驻点，再判导数符号分类。",
      "role": "primary",
      "roleNote": "导数判号直接求所问极值。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第3张题面图第17题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2017-301-18

```json
{
  "id": "2017-301-18",
  "libraryId": "math-one",
  "paperId": "math-one-2017",
  "number": "18",
  "summary": "双根存在证明",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540317.html",
    "page": 3,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-intermediate-value",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 18 题：先用端点及近零符号取零点，再对平方函数或适当辅助函数使用罗尔定理产生导数零点。",
      "role": "primary",
      "roleNote": "第一问用异号直接证明函数零点存在。"
    },
    {
      "methodId": "hm-mean-value-proof",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 18 题：先用端点及近零符号取零点，再对平方函数或适当辅助函数使用罗尔定理产生导数零点。",
      "role": "primary",
      "roleNote": "第二问通过辅助函数与罗尔定理直接证明两个导数方程根。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "原函数零点",
      "methodIds": [
        "hm-intermediate-value"
      ],
      "evidenceNote": "新东方文章第3张题面图第18题明确列出第1个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "导数组合零点",
      "methodIds": [
        "hm-mean-value-proof"
      ],
      "evidenceNote": "新东方文章第4张题面图第18题明确列出第2个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第3张题面图第18题已核对完整题面及第4图续问；共2个独立编号子问，已逐项记录。"
  }
}
```

## 2018-301-01

```json
{
  "id": "2018-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2018",
  "number": "1",
  "summary": "可导判断",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540313.html",
    "page": 1,
    "locatorKind": "image-index",
    "metadata": {
      "publisher": "新东方考研（第三方转载）",
      "level": "third-party",
      "checkedOn": "2026-09-08",
      "availability": "available",
      "evidence": "2026-09-08已有实际阅读记录。实际查看文章图片，核对参数、三角形类型和周期解措辞；本文章第7题符号损坏，未为第7题采用此资源。",
      "bodyMode": "external-link",
      "rightsNote": "未核实题面及第三方解析的转载许可；仓库仅提供外部链接、原创短摘要和独立方法关联说明，不收录整套题面或转载解析。"
    }
  },
  "methodLinks": [
    {
      "methodId": "hm-derivative-definition",
      "note": "独立复核：来源第 1 题。分别取左右差商；含根号的余弦项展开后出现绝对值的一阶尖点。",
      "verification": "verified",
      "role": "primary",
      "roleNote": "左右差商直接判断各函数在指定点是否可导。"
    }
  ],
  "sourceNote": "独立复核改用新东方页图；page 为文章内试卷图序号。第14题跨第2、3图，第20题跨第3、4图。原PDF存在遗漏参数、互斥符号、题意等排印问题。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第1张题面图第1题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2019-301-02

```json
{
  "id": "2019-301-02",
  "libraryId": "math-one",
  "paperId": "math-one-2019",
  "number": "2",
  "summary": "分段极值",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540306.html",
    "page": 1,
    "locatorKind": "image-index",
    "metadata": {
      "publisher": "新东方考研（第三方转载）",
      "level": "third-party",
      "checkedOn": "2026-09-08",
      "availability": "available",
      "evidence": "2026-09-08已有实际阅读记录。实际查看文章图片核对对应题面；本文章第18题递推分母有误，因此第18题保留其他来源。",
      "bodyMode": "external-link",
      "rightsNote": "未核实题面及第三方解析的转载许可；仓库仅提供外部链接、原创短摘要和独立方法关联说明，不收录整套题面或转载解析。"
    }
  },
  "methodLinks": [
    {
      "note": "独立复核：来源第 2 题。左右差商中对数项发散，同时检查零点两侧函数符号判断极值。",
      "methodId": "hm-derivative-definition",
      "verification": "verified",
      "role": "primary",
      "roleNote": "左右差商直接回答题目中的可导性判断。"
    },
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "role": "primary",
      "roleNote": "分段单调性及拼接连续性直接完成未编号的极值属性判断；原求导定义关联只回答可导性。",
      "note": "未编号目标补审：重新目视新东方第1图第2题，并读取 https://www.csgraduates.com/study_methods/math/math1/2019/ 第2题确认左支含0。左邻域f=−x²，f′=−2x>0；右邻域0<x<e^(−1)时f′=ln x+1<0。两侧函数均趋f(0)=0，连续且先增后减，故0是严格极大值点。零点不可导不阻止分段极值判别；无需修改原差商关联。"
    }
  ],
  "sourceNote": "独立复核采用新东方页图，page 为图序号；第19题正文在第4图，第23题密度在第5图。部分不等号排印异常，结合原HTML确认适用条件。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第1张题面图第2题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2019-301-15

```json
{
  "id": "2019-301-15",
  "libraryId": "math-one",
  "paperId": "math-one-2019",
  "number": "15",
  "summary": "线性方程",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540306.html",
    "page": 3,
    "locatorKind": "image-index",
    "metadata": {
      "publisher": "新东方考研（第三方转载）",
      "level": "third-party",
      "checkedOn": "2026-09-08",
      "availability": "available",
      "evidence": "2026-09-08已有实际阅读记录。实际查看文章图片核对对应题面；本文章第18题递推分母有误，因此第18题保留其他来源。",
      "bodyMode": "external-link",
      "rightsNote": "未核实题面及第三方解析的转载许可；仓库仅提供外部链接、原创短摘要和独立方法关联说明，不收录整套题面或转载解析。"
    }
  },
  "methodLinks": [
    {
      "note": "独立复核：来源第 15 题。一阶线性积分因子求特解，再通过二阶导符号研究凹凸。",
      "methodId": "hm-ode-linear-first",
      "verification": "verified",
      "role": "primary",
      "roleNote": "直接完成第一问所求微分方程特解。"
    },
    {
      "methodId": "hm-concavity-asymptote",
      "verification": "verified",
      "note": "重读新东方第3图第15题(II)：(I)得y=xe^(−x²/2)，二阶导y″=x(x²−3)e^(−x²/2)。符号在−√3、0、√3逐次改变：依次为负、正、负、正，三处均连续，是全部拐点；对应纵坐标为−√3e^(−3/2)、0、√3e^(−3/2)。",
      "role": "primary",
      "roleNote": "二阶导变号直接确定(II)全部凹凸区间和拐点。"
    }
  ],
  "sourceNote": "独立复核采用新东方页图，page 为图序号；第19题正文在第4图，第23题密度在第5图。部分不等号排印异常，结合原HTML确认适用条件。",
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "求初值特解",
      "methodIds": [
        "hm-ode-linear-first"
      ],
      "evidenceNote": "新东方文章第3张题面图第15题明确列出第1个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "凹凸及拐点",
      "methodIds": [
        "hm-concavity-asymptote"
      ],
      "evidenceNote": "新东方文章第3张题面图第15题明确列出第2个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第3张题面图第15题已核对完整题面；共2个独立编号子问，已逐项记录。"
  }
}
```

## 2020-301-02

```json
{
  "id": "2020-301-02",
  "libraryId": "math-one",
  "paperId": "math-one-2020",
  "number": "2",
  "summary": "可导与极限",
  "source": {
    "url": "https://images.eduego.com/Uploads/file/20231226/88d4a0f740e5fb7a74fee2609d3a459c.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "note": "独立复核：来源第 2 题。仅有极限零不能代替零点取值；可导蕴含连续，再由差商与根号量比较。",
      "verification": "verified",
      "methodId": "hm-derivative-definition",
      "role": "primary",
      "roleNote": "真实点值的差商直接判断可导与极限命题。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第1页第2题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2020-301-10

```json
{
  "id": "2020-301-10",
  "libraryId": "math-one",
  "paperId": "math-one-2020",
  "number": "10",
  "summary": "参数二阶导",
  "source": {
    "url": "https://images.eduego.com/Uploads/file/20231226/88d4a0f740e5fb7a74fee2609d3a459c.pdf",
    "page": 2
  },
  "methodLinks": [
    {
      "note": "独立复核：来源第 10 题。先求 dy/dx，再对参数求导并除以 dx/dt，检查指定参数处分母非零。",
      "verification": "verified",
      "methodId": "hm-parametric-derivative",
      "role": "primary",
      "roleNote": "两次参数求导直接求指定点的二阶导数。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第2页第10题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2020-301-19

```json
{
  "id": "2020-301-19",
  "libraryId": "math-one",
  "paperId": "math-one-2020",
  "number": "19",
  "summary": "中值证明",
  "source": {
    "url": "https://images.eduego.com/Uploads/file/20231226/88d4a0f740e5fb7a74fee2609d3a459c.pdf",
    "page": 3
  },
  "methodLinks": [
    {
      "note": "独立复核：来源第 19 题。取绝对值最大点分别用两段中值定理；等号约束结合该点导数为零处理第二问。",
      "verification": "verified",
      "methodId": "hm-mean-value-proof",
      "role": "primary",
      "roleNote": "分段中值与等号分析直接完成两个证明任务。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "导数幅值下界",
      "methodIds": [
        "hm-mean-value-proof"
      ],
      "evidenceNote": "来源PDF物理第3页第19题明确列出第1个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "证明函数为零",
      "methodIds": [
        "hm-mean-value-proof"
      ],
      "evidenceNote": "来源PDF物理第3页第19题明确列出第2个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第3页第19题已核对完整题面；共2个独立编号子问，已逐项记录。"
  }
}
```

## 2021-301-01

```json
{
  "id": "2021-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2021",
  "number": "1",
  "summary": "拼接点可导性",
  "source": {
    "url": "https://edu.xaiu.edu.cn/__local/A/82/2F/B6321C9DAB14C18B56BADCD4A3F_F5BD7903_60505.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "methodId": "hm-derivative-definition",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 1 页第 1 题。以点值构造差商，指数展开到二阶判断导数。 独立复核（2026-09-08，重读题面）：差商的极限为非零常数，拼接值等于极限；导数定义适用。",
      "role": "primary",
      "roleNote": "差商直接判断拼接点可导性。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第1题，PDF物理第1页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2021-301-12

```json
{
  "id": "2021-301-12",
  "libraryId": "math-one",
  "paperId": "math-one-2021",
  "number": "12",
  "summary": "参数二阶导",
  "source": {
    "url": "https://edu.xaiu.edu.cn/__local/A/82/2F/B6321C9DAB14C18B56BADCD4A3F_F5BD7903_60505.pdf",
    "page": 3
  },
  "methodLinks": [
    {
      "methodId": "hm-parametric-derivative",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 3 页第 12 题。先求参数一阶导之比，再对参数求导并除以横坐标导数。 独立复核（2026-09-08，重读题面）：给定参数点横坐标导数非零，可连续使用参数求导公式。",
      "role": "primary",
      "roleNote": "参数二阶求导直接给目标值。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第12题，PDF物理第3页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2022-301-13

```json
{
  "id": "2022-301-13",
  "libraryId": "math-one",
  "paperId": "math-one-2022",
  "number": "13",
  "summary": "参数恒成立",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2022/"
  },
  "methodLinks": [
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "note": "主agent独立重读题面复核：令非负变量之和固定，以平方和上界化为一元极值，并检查边界达到条件。",
      "role": "primary",
      "roleNote": "一元极值直接确定恒成立参数。"
    }
  ],
  "sourceNote": "原PDF链接本轮连接出现TLS证书错误；改用已逐题阅读核对的公开HTML转载，未认证官方原卷。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第13题，网页按题号定位；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2022-301-17

```json
{
  "id": "2022-301-17",
  "libraryId": "math-one",
  "paperId": "math-one-2022",
  "number": "17",
  "summary": "微分方程",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2022/"
  },
  "methodLinks": [
    {
      "methodId": "hm-ode-linear-first",
      "verification": "verified",
      "note": "主agent独立重读题面复核：在正自变量区间用积分因子求初值解，之后另分析远端渐近。",
      "role": "primary",
      "roleNote": "积分因子直接求初值解。"
    },
    {
      "methodId": "hm-concavity-asymptote",
      "verification": "verified",
      "role": "primary",
      "roleNote": "目标是渐近线；由解的斜率截距极限直接完成，而不止停在解方程。",
      "note": "无编号目标独立复核：当前网页第17题与原转载PDF物理第5页的题干一致：系数为1/(2√x)。初值解y=2x+exp(1−√x)，直接代回满足方程且y(1)=3。x→∞时y/x→2、y−2x→0，故渐近线为y=2x；x→0+时y→e有限，没有竖直渐近线。"
    }
  ],
  "sourceNote": "原PDF链接本轮连接出现TLS证书错误；改用已逐题阅读核对的公开HTML转载，未认证官方原卷。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第17题，网页按题号定位；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2022-301-20

```json
{
  "id": "2022-301-20",
  "libraryId": "math-one",
  "paperId": "math-one-2022",
  "number": "20",
  "summary": "凸性证明",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2022/"
  },
  "methodLinks": [
    {
      "methodId": "hm-taylor-remainder",
      "verification": "verified",
      "note": "主agent独立重读题面复核：必要方向在中心作二阶展开并令区间缩小；余项条件由二阶连续保证。",
      "role": "primary",
      "roleNote": "二阶展开直接证明必要方向。"
    },
    {
      "methodId": "hm-integral-inequality",
      "verification": "verified",
      "role": "primary",
      "roleNote": "积分保序直接完成充分必要证明中由二阶导非负推出平均积分界的方向。",
      "note": "无编号目标独立复核：当前来源第20题：对f″≥0推出积分不等式的方向，令m=(a+b)/2、h=|b−a|/2。f′单调不减使H(t)=f(m+t)+f(m−t)−2f(m)满足H(0)=0、H′(t)≥0。积分0至h得到平均积分≥f(m)，交换a,b时平均积分不变。逆方向仍由原泰勒关联处理。"
    }
  ],
  "sourceNote": "原PDF链接本轮连接出现TLS证书错误；改用已逐题阅读核对的公开HTML转载，未认证官方原卷。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第20题，网页按题号定位；完整核对题干，未见显式作答子问编号；选项不计。充分必要证明没有划分编号；不能将证明的两个方向登记为题面子问。"
  }
}
```

## 2023-301-01

```json
{
  "id": "2023-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2023",
  "number": "1",
  "summary": "斜渐近线",
  "source": {
    "url": "https://www.ztbu.edu.cn/uploadfile/files/2023/05/07/20230507174051089.pdf",
    "page": 2
  },
  "methodLinks": [
    {
      "methodId": "hm-concavity-asymptote",
      "verification": "verified",
      "note": "主agent独立重读题面复核：渐近线需分别求斜率和截距极限，定义域的有限断点也应检查。",
      "role": "primary",
      "roleNote": "斜率截距极限直接确定渐近线。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第1题，PDF物理第2页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2023-301-03

```json
{
  "id": "2023-301-03",
  "libraryId": "math-one",
  "paperId": "math-one-2023",
  "number": "3",
  "summary": "参数可导性",
  "source": {
    "url": "https://www.ztbu.edu.cn/uploadfile/files/2023/05/07/20230507174051089.pdf",
    "page": 2
  },
  "methodLinks": [
    {
      "methodId": "hm-parametric-derivative",
      "verification": "verified",
      "note": "主agent独立重读题面复核：仅在参数非零的两侧使用参数求导，零点另依导数定义拼接。",
      "role": "supporting",
      "roleNote": "给非零参数两侧斜率，不能代替零点判别。"
    },
    {
      "methodId": "hm-derivative-definition",
      "verification": "verified",
      "note": "零点的参数表示含绝对值，须用左右导数定义，不能直接代入参数求导公式。",
      "role": "primary",
      "roleNote": "零点左右差商直接完成可导性判断。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第3题，PDF物理第2页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2023-301-17

```json
{
  "id": "2023-301-17",
  "libraryId": "math-one",
  "paperId": "math-one-2023",
  "number": "17",
  "summary": "切线建模",
  "source": {
    "url": "https://www.ztbu.edu.cn/uploadfile/files/2023/05/07/20230507174051089.pdf",
    "page": 3
  },
  "methodLinks": [
    {
      "methodId": "hm-ode-linear-first",
      "verification": "verified",
      "note": "主agent独立重读题面复核：切线截距关系转为一阶线性方程，再用初值确定常数。",
      "role": "primary",
      "roleNote": "切线关系所得一阶方程直接求曲线。"
    },
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "role": "primary",
      "roleNote": "第二问导数变号直接求积分函数全局最值。",
      "note": "子问边界复核：当前来源第17题。第二问由第一问y=x(2−ln x)，积分函数导数就是y，在e²前正后负，故唯一全局最大点e²；积分取值为(e⁴−5)/4。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "（Ⅰ）",
      "summary": "求曲线函数",
      "methodIds": [
        "hm-ode-linear-first"
      ],
      "evidenceNote": "当前来源第17题，PDF物理第3页明确列出（Ⅰ）作答任务；不是解析中的步骤编号。"
    },
    {
      "id": "part-2",
      "label": "（Ⅱ）",
      "summary": "积分函数最值",
      "methodIds": [
        "hm-monotonic-extrema"
      ],
      "evidenceNote": "当前来源第17题，PDF物理第3页明确列出（Ⅱ）作答任务；不是解析中的步骤编号。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "当前来源第17题，PDF物理第3页；完整读到题干结束，共2个最末级显式子问。"
  }
}
```

## 2023-301-20

```json
{
  "id": "2023-301-20",
  "libraryId": "math-one",
  "paperId": "math-one-2023",
  "number": "20",
  "summary": "中值证明",
  "source": {
    "url": "https://www.ztbu.edu.cn/uploadfile/files/2023/05/07/20230507174051089.pdf",
    "page": 4
  },
  "methodLinks": [
    {
      "methodId": "hm-taylor-remainder",
      "verification": "verified",
      "note": "主agent独立重读题面复核：两侧分别展开并保留各自余项点，之后用二阶导连续性合并范围。",
      "role": "primary",
      "roleNote": "双侧泰勒余项直接构造证明所需点。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "（Ⅰ）",
      "summary": "二阶导中值",
      "methodIds": [
        "hm-taylor-remainder"
      ],
      "evidenceNote": "当前来源第20题，PDF物理第4页明确列出（Ⅰ）作答任务；不是解析中的步骤编号。"
    },
    {
      "id": "part-2",
      "label": "（Ⅱ）",
      "summary": "二阶导下界",
      "methodIds": [
        "hm-taylor-remainder"
      ],
      "evidenceNote": "当前来源第20题，PDF物理第4页明确列出（Ⅱ）作答任务；不是解析中的步骤编号。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "当前来源第20题，PDF物理第4页；完整读到题干结束，共2个最末级显式子问。"
  }
}
```

## 2024-301-04

```json
{
  "id": "2024-301-04",
  "libraryId": "math-one",
  "paperId": "math-one-2024",
  "number": "4",
  "summary": "导数定义辨析",
  "source": {
    "url": "https://gjb.ztbu.edu.cn/attachment/sites/item/2025_09/18_17/1066d05b0b708445.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "methodId": "hm-derivative-definition",
      "verification": "verified",
      "note": "独立二次核对来源 第 1 页图 第 4 题：导数存在必须使用真实点值作差商，仅有函数极限不能替代题给点值。",
      "role": "primary",
      "roleNote": "真实点值差商直接判导数命题。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第4题，PDF物理第1页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2024-301-18

```json
{
  "id": "2024-301-18",
  "libraryId": "math-one",
  "paperId": "math-one-2024",
  "number": "18",
  "summary": "切平面确定投影闭域后求二元函数最大最小值",
  "source": {
    "url": "https://gjb.ztbu.edu.cn/attachment/sites/item/2025_09/18_17/1066d05b0b708445.pdf",
    "page": 4
  },
  "methodLinks": [
    {
      "methodId": "hm-tangent-plane",
      "verification": "verified",
      "note": "独立二次核对来源 第 4 页图 第 18 题：曲面偏导给切平面，再在投影闭三角形内对原函数求驻点并检查边界及角点。",
      "role": "primary",
      "roleNote": "第一问明确要求切平面方程。"
    },
    {
      "methodId": "hm-hessian-extrema",
      "verification": "verified",
      "note": "独立二次核对来源 第 4 页图 第 18 题：曲面偏导给切平面，再在投影闭三角形内对原函数求驻点并检查边界及角点。",
      "role": "supporting",
      "roleNote": "为第二问闭域最值提供内部驻点判别。"
    },
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "note": "独立二次核对来源 第 4 页图 第 18 题：曲面偏导给切平面，再在投影闭三角形内对原函数求驻点并检查边界及角点。 子问直接路线复核：当前PDF第4页第18题(2)，切平面给D={x≥0,y≥0,x+y≤3}。令s=x+y，0≤xy≤s²/4，则f=s³−3sxy−s²+3介于L(s)=s³/4−s²+3和U(s)=s³−s²+3。L′=s(3s/4−2)，在[0,3]的最小值为L(8/3)=17/27；U′=s(3s−2)，比较0、2/3、3得最大值U(3)=21。下界在x=y=4/3取得，上界在(3,0)及(0,3)取得，故一元最值路线直接完成全局两端值。",
      "role": "primary",
      "roleNote": "第二问先以和变量构造可取等上下包络，再分别用一元最值直接求闭域全局最大最小值。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "（1）",
      "summary": "切平面方程",
      "methodIds": [
        "hm-tangent-plane"
      ],
      "evidenceNote": "当前来源第18题，PDF物理第4页明确列出（1）作答任务；不是解析中的步骤编号。"
    },
    {
      "id": "part-2",
      "label": "（2）",
      "summary": "闭域最值",
      "methodIds": [
        "hm-hessian-extrema",
        "hm-monotonic-extrema"
      ],
      "evidenceNote": "当前来源第18题，PDF物理第4页明确列出（2）作答任务；不是解析中的步骤编号。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "当前来源第18题，PDF物理第4页；完整读到题干结束，共2个最末级显式子问。"
  }
}
```

## 2024-301-19

```json
{
  "id": "2024-301-19",
  "libraryId": "math-one",
  "paperId": "math-one-2024",
  "number": "19",
  "summary": "插值积分误差",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2024/",
    "metadata": {
      "publisher": "CS Graduates社区网站（整理者未核实）",
      "level": "third-party",
      "checkedOn": "2026-09-08",
      "availability": "available",
      "evidence": "2026-09-08已有实际阅读记录。实际阅读第19题，导数条件及区间清楚，替换高校PDF中的重复条件。",
      "bodyMode": "external-link",
      "rightsNote": "未核实题面及第三方解析的转载许可；仓库仅提供外部链接、原创短摘要和独立方法关联说明，不收录整套题面或转载解析。"
    }
  },
  "methodLinks": [
    {
      "methodId": "hm-taylor-remainder",
      "verification": "verified",
      "note": "独立二次核对高校 PDF 第 4 页及本链接第 19 题：在目标内点分别对两端作一阶泰勒展开，插值权重使一阶项抵消；余项界再积分给整体误差界。",
      "role": "primary",
      "roleNote": "第一问直接证明插值点误差界。"
    },
    {
      "methodId": "hm-integral-inequality",
      "verification": "verified",
      "note": "独立二次核对高校 PDF 第 4 页及本链接第 19 题：在目标内点分别对两端作一阶泰勒展开，插值权重使一阶项抵消；余项界再积分给整体误差界。",
      "role": "primary",
      "roleNote": "第二问由点态界积分直接证明整体误差界。"
    }
  ],
  "sourceNote": "高校 PDF 第 4 页重复排为 f′(0)=f′(0)，并有区间缺损；本链接第 19 题写 f′(0)=f′(1)、内点 0<x<1。已用两个来源核对误差任务；均非官方原卷，未采信个人页面解析中的凸性推理。",
  "subquestions": [
    {
      "id": "part-1",
      "label": "（1）",
      "summary": "点态误差界",
      "methodIds": [
        "hm-taylor-remainder"
      ],
      "evidenceNote": "当前来源第19题，网页按题号定位明确列出（1）作答任务；不是解析中的步骤编号。"
    },
    {
      "id": "part-2",
      "label": "（2）",
      "summary": "积分误差界",
      "methodIds": [
        "hm-integral-inequality"
      ],
      "evidenceNote": "当前来源第19题，网页按题号定位明确列出（2）作答任务；不是解析中的步骤编号。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "当前来源第19题，网页按题号定位；完整读到题干结束，共2个最末级显式子问。"
  }
}
```

## 2025-301-01

```json
{
  "id": "2025-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2025",
  "number": "1",
  "summary": "极值拐点",
  "source": {
    "url": "https://gjb.ztbu.edu.cn/attachment/sites/item/2025_09/18_17/ab27a44c5f0cbe5e.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "methodId": "hm-monotonic-extrema",
      "verification": "verified",
      "note": "原题第1页第1题：变限求导后查变号。 独立复核：变限积分求导后在零点两侧判断导数符号；此关联用于极值子任务。",
      "role": "primary",
      "roleNote": "导数变号直接判断极值子任务。"
    },
    {
      "methodId": "hm-concavity-asymptote",
      "verification": "verified",
      "role": "primary",
      "roleNote": "直接完成题目选项中的拐点判断，与已有极值方法分别处理不同性质。",
      "note": "无编号目标独立复核：当前PDF物理第1页第1题：f′(x)=exp(x²)sin x在0左右由负转正且f″(0)=1；g(x)=(∫₀ˣexp(t²)dt)sin²x是光滑函数，展开后g″(x)=6x+O(x³)，因此g″在0两侧变号，(0,0)为g图像拐点。只查f的极值不足以判全题选项。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第1题，PDF物理第1页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2025-301-19

```json
{
  "id": "2025-301-19",
  "libraryId": "math-one",
  "paperId": "math-one-2025",
  "number": "19",
  "summary": "割线与导数",
  "source": {
    "url": "https://gjb.ztbu.edu.cn/attachment/sites/item/2025_09/18_17/ab27a44c5f0cbe5e.pdf",
    "page": 12
  },
  "methodLinks": [
    {
      "methodId": "hm-mean-value-proof",
      "verification": "verified",
      "note": "原题第12页第19题：在相邻区间用中值。 独立复核：在相邻两区间分别取中值点可证明必要方向；充分方向需再用割线极限，不能沿用同一中值点。",
      "role": "primary",
      "roleNote": "相邻区间中值定理直接证明必要方向。"
    },
    {
      "methodId": "hm-convex-secant",
      "verification": "verified",
      "note": "独立复核：三点严格割线关系与可导条件一起连接凸性、割线极限和导数严格单调；须处理等号排除。",
      "role": "primary",
      "roleNote": "割线极限和等号排除直接证明充分方向。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第19题，PDF物理第12页；完整核对题干，未见显式作答子问编号；选项不计。充分必要证明没有显式子问编号；解析中的分方向编号不计。"
  }
}
```

## 2026-301-03

```json
{
  "id": "2026-301-03",
  "libraryId": "math-one",
  "paperId": "math-one-2026",
  "number": "3",
  "summary": "凹性与单调性",
  "source": {
    "url": "https://cdn.liiistem.cn/library/2026-test-math1.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "verification": "verified",
      "methodId": "hm-convex-secant",
      "note": "独立重读第1页：用三点割线不等式检验凸性，须排除差商分母为零端点；只认证方法适用，不认证排印选项",
      "role": "primary",
      "roleNote": "三点割线条件直接判断凹凸命题。"
    }
  ],
  "sourceNote": "差商选项区间包含分母为零端点，题面仍待校正；已新增不要求可导的凸性定义方法关联，仅在合法差商范围使用。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第3题，PDF物理第1页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2026-301-13

```json
{
  "id": "2026-301-13",
  "libraryId": "math-one",
  "paperId": "math-one-2026",
  "number": "13",
  "summary": "参数曲线二阶导",
  "source": {
    "url": "https://cdn.liiistem.cn/library/2026-test-math1.pdf",
    "page": 6
  },
  "methodLinks": [
    {
      "methodId": "hm-parametric-derivative",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 6 页第 13 题。按参数求斜率，二阶再除横坐标导数，检查目标点正则。 独立复核（2026-09-08，重读题面）：参数点横坐标导数非零，二阶参数导数公式适用。",
      "role": "primary",
      "roleNote": "参数二阶公式直接给指定点导数。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第13题，PDF物理第6页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2026-301-20

```json
{
  "id": "2026-301-20",
  "libraryId": "math-one",
  "paperId": "math-one-2026",
  "number": "20",
  "summary": "积分与二阶零点",
  "source": {
    "url": "https://cdn.liiistem.cn/library/2026-test-math1.pdf",
    "page": 9
  },
  "methodLinks": [
    {
      "methodId": "hm-integral-inequality",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 9 页第 20 题。利用严格单调性比较左右区间积分。 独立复核（2026-09-08，重读题面）：单调性控制两半积分；三个函数零点支持两次罗尔定理。",
      "role": "primary",
      "roleNote": "第一问直接证明半区间积分严格为正。"
    },
    {
      "methodId": "hm-mean-value-proof",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 9 页第 20 题。构造函数在三个点等值后连续两次用罗尔定理。 独立复核（2026-09-08，重读题面）：单调性控制两半积分；三个函数零点支持两次罗尔定理。",
      "role": "primary",
      "roleNote": "第二问两次罗尔直接证明二阶导零点存在。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "（1）",
      "summary": "积分严格正性",
      "methodIds": [
        "hm-integral-inequality"
      ],
      "evidenceNote": "当前来源第20题，PDF物理第9页明确列出（1）作答任务；不是解析中的步骤编号。"
    },
    {
      "id": "part-2",
      "label": "（2）",
      "summary": "二阶导零点",
      "methodIds": [
        "hm-mean-value-proof"
      ],
      "evidenceNote": "当前来源第20题，PDF物理第9页明确列出（2）作答任务；不是解析中的步骤编号。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "当前来源第20题，PDF物理第9页；完整读到题干结束，共2个最末级显式子问。"
  }
}
```
