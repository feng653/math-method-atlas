# 既有题目记录摘录

供作者核对；只表示既有数据库记录，不是本轮重新核验，不能继承到新方法频次。不得复制整套外部解析。

## 2009-301-01

```json
{
  "id": "2009-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2009",
  "number": "1",
  "summary": "等价无穷小反参",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2009/"
  },
  "methodLinks": [
    {
      "methodId": "hm-taylor-limit",
      "verification": "verified",
      "note": "独立方法关联复核：展开 x−sin(ax) 后一次项须消失，再把三次首项与对数乘积比较，泰勒方法适用。",
      "role": "primary",
      "roleNote": "消去低阶项并匹配首项系数，直接确定所求参数。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第1题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2010-301-01

```json
{
  "id": "2010-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2010",
  "number": "1",
  "summary": "无穷远幂指极限",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2010/"
  },
  "methodLinks": [
    {
      "methodId": "hm-power-indeterminate",
      "verification": "verified",
      "note": "独立方法关联复核：底数趋1，取对数后保留分子分母的一阶倒数差，指数乘积有有限极限。",
      "role": "primary",
      "roleNote": "取对数控制指数与底数偏差，直接求幂指极限。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第1题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2010-301-17

```json
{
  "id": "2010-301-17",
  "libraryId": "math-one",
  "paperId": "math-one-2010",
  "number": "17",
  "summary": "积分序列夹逼",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2010/"
  },
  "methodLinks": [
    {
      "methodId": "hm-integral-inequality",
      "verification": "verified",
      "note": "独立方法关联复核：0<ln(1+t)<t给正积分上界，tⁿ|ln t|积分可算且趋零，适用积分比较与夹逼。",
      "role": "supporting",
      "roleNote": "构造趋零的可算积分上界，作为数列夹逼的界。"
    },
    {
      "methodId": "hm-squeeze",
      "verification": "verified",
      "note": "独立方法关联复核：0<ln(1+t)<t给正积分上界，tⁿ|ln t|积分可算且趋零，适用积分比较与夹逼。",
      "role": "primary",
      "roleNote": "由正下界与趋零上界直接推出所求极限。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "比较两类积分大小",
      "methodIds": [
        "hm-integral-inequality"
      ],
      "evidenceNote": "所选来源第17题题面明确列出(I)任务；按原题标号边界记录，不拆解答步骤。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "求积分数列极限",
      "methodIds": [
        "hm-squeeze"
      ],
      "evidenceNote": "所选来源第17题题面明确列出(II)任务；按原题标号边界记录，不拆解答步骤。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "所选来源第17题题面已逐项核对全部显式子问标号。"
  }
}
```

## 2011-301-15

```json
{
  "id": "2011-301-15",
  "libraryId": "math-one",
  "paperId": "math-one-2011",
  "number": "15",
  "summary": "幂指极限",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2011/"
  },
  "methodLinks": [
    {
      "methodId": "hm-power-indeterminate",
      "verification": "verified",
      "note": "独立方法关联复核：已读取单独公式块：底数ln(1+x)/x趋1，指数1/(eˣ−1)；对数的一阶项配合泰勒得到有限极限。",
      "role": "primary",
      "roleNote": "对幂指表达式取对数后还原指数，直接得到原极限。"
    },
    {
      "methodId": "hm-taylor-limit",
      "verification": "verified",
      "note": "独立方法关联复核：已读取单独公式块：底数ln(1+x)/x趋1，指数1/(eˣ−1)；对数的一阶项配合泰勒得到有限极限。",
      "role": "supporting",
      "roleNote": "展开对数与指数差，计算取对数后需要的一阶极限。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第15题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
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

## 2011-301-18

```json
{
  "id": "2011-301-18",
  "libraryId": "math-one",
  "paperId": "math-one-2011",
  "number": "18",
  "summary": "对数界与数列",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2011/"
  },
  "methodLinks": [
    {
      "methodId": "hm-integral-inequality",
      "verification": "verified",
      "note": "独立复核：对1/t在[n,n+1]的积分用端点值严格夹界，得到题设对数不等式；再用于相邻差及调和和的下界。",
      "role": "primary",
      "roleNote": "严格端点积分界直接证明第Ⅰ问对数不等式。"
    },
    {
      "methodId": "hm-recursive-limit",
      "verification": "verified",
      "note": "独立二审实际题面及扩展后的方法卡：相邻差1/(n+1)−ln(1+1/n)<0，调和和大于ln(n+1)，因此a_n>0；递减有下界即收敛。现卡明确适用于一般数列，无需自治递推或求不动点。",
      "role": "primary",
      "roleNote": "第Ⅱ问证明递减且有下界后直接得数列收敛。"
    }
  ],
  "sourceNote": "2026-09-08独立重读实际题面，并审核一般单调有界方法扩展；两条关联均已核验。来源为社区转录，不视为官方试卷认证。",
  "subquestions": [
    {
      "id": "part-1",
      "label": "(1)",
      "summary": "证明对数的严格双边界",
      "methodIds": [
        "hm-integral-inequality"
      ],
      "evidenceNote": "所选来源第18题题面明确列出(1)任务；按原题标号边界记录，不拆解答步骤。"
    },
    {
      "id": "part-2",
      "label": "(2)",
      "summary": "证明调和和减对数收敛",
      "methodIds": [
        "hm-recursive-limit"
      ],
      "evidenceNote": "所选来源第18题题面明确列出(2)任务；按原题标号边界记录，不拆解答步骤。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "所选来源第18题题面已逐项核对全部显式子问标号。"
  }
}
```

## 2013-301-01

```json
{
  "id": "2013-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2013",
  "number": "1",
  "summary": "无穷小阶",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2013/#1"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 1 题。反正切三阶展开抵消一次项，首项为三阶且正系数。",
      "methodId": "hm-taylor-limit",
      "role": "primary",
      "roleNote": "展开并找抵消后的最低非零项，直接确定无穷小阶。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第1题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2014-301-10

```json
{
  "id": "2014-301-10",
  "libraryId": "math-one",
  "paperId": "math-one-2014",
  "number": "10",
  "summary": "周期取值",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2014/#10"
  },
  "methodLinks": [
    {
      "methodId": "hm-newton-leibniz",
      "verification": "verified",
      "note": "独立复核：来源第 10 题。原定义域卡不处理奇性周期；改用积分恢复函数，以奇性确定常数后周期归约。",
      "role": "supporting",
      "roleNote": "积分恢复局部函数，所问远端取值还依赖奇性及周期归约。"
    },
    {
      "methodId": "hm-function-properties",
      "verification": "verified",
      "role": "primary",
      "roleNote": "用奇性确定零点值，再周期归约直接求指定远端函数值。",
      "note": "独立重读第10题：奇性给 f(0)=0，局部积分得 f(1)=−1；周期4使 f(7)=f(−1)，再由奇性得 f(7)=1。定义域在归约及反射点均合法；不将局部二次表达式直接延伸到全实轴。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第10题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2014-301-15

```json
{
  "id": "2014-301-15",
  "libraryId": "math-one",
  "paperId": "math-one-2014",
  "number": "15",
  "summary": "积分极限",
  "source": {
    "url": "https://doc.kmf.com/ky_material/77/a2/77a25f193cfa52d46d8c504e15e96620.pdf",
    "page": 7,
    "metadata": {
      "publisher": "考满分KMF（第三方托管；原编者未核实）",
      "level": "third-party",
      "checkedOn": "2026-09-08",
      "availability": "available",
      "evidence": "2026-09-08已有实际阅读记录。实际查看PDF第7页对应题面。第11题初值指数与社区版本存在分歧，保留所采用PDF版本，尚无官方裁定。",
      "bodyMode": "external-link",
      "rightsNote": "未核实题面及第三方解析的转载许可；仓库仅提供外部链接、原创短摘要和独立方法关联说明，不收录整套题面或转载解析。"
    }
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 15 题，第 7 页。已读PDF确认上下限及分母；先确认无穷型，再用变上限求导和指数二阶展开。",
      "methodId": "hm-lhopital",
      "role": "primary",
      "roleNote": "确认无穷型并求导化简，直接计算积分商极限。"
    }
  ],
  "sourceNote": "独立复核改用已读第二来源；页号为PDF物理页或文章内试卷页图序号。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第15题题面（PDF物理页7）已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2015-301-09

```json
{
  "id": "2015-301-09",
  "libraryId": "math-one",
  "paperId": "math-one-2015",
  "number": "9",
  "summary": "对数三角极限",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540418.html",
    "page": 2,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-equivalent-infinitesimal",
      "verification": "verified",
      "note": "独立二次核对来源 第 2 页图 第 9 题：ln cos x 与 −x²/2 等价，极限为 −1/2。",
      "role": "primary",
      "roleNote": "等价替换直接给出所问商极限。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第2张题面图第9题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2015-301-15

```json
{
  "id": "2015-301-15",
  "libraryId": "math-one",
  "paperId": "math-one-2015",
  "number": "15",
  "summary": "无穷小反参",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540418.html",
    "page": 3,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-taylor-limit",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 15 题：展开到三阶，先令一次、二次系数消失再识别等价三阶项。",
      "role": "primary",
      "roleNote": "比较首个未消去系数直接确定无穷小参数。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第3张题面图第15题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2016-301-02

```json
{
  "id": "2016-301-02",
  "libraryId": "math-one",
  "paperId": "math-one-2016",
  "number": "2",
  "summary": "拼接原函数",
  "source": {
    "url": "https://file.xdf.cn/uploads/151228/124_151228165345iuBbx7Mn8g2DSO7R.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "methodId": "hm-continuity-piecewise",
      "verification": "verified",
      "note": "独立二次核对来源 第 1 页图 第 2 题：先分段积分且对数部分分部积分，再令原函数在拼接点连续。",
      "role": "primary",
      "roleNote": "原函数在拼接点连续直接确定所问拼接常数。"
    },
    {
      "methodId": "hm-integration-by-parts",
      "verification": "verified",
      "note": "独立二次核对来源 第 1 页图 第 2 题：先分段积分且对数部分分部积分，再令原函数在拼接点连续。",
      "role": "supporting",
      "roleNote": "求对数分支原函数，辅助后续拼接。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第1页第2题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
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

## 2016-301-09

```json
{
  "id": "2016-301-09",
  "libraryId": "math-one",
  "paperId": "math-one-2016",
  "number": "9",
  "summary": "变上限积分极限",
  "source": {
    "url": "https://file.xdf.cn/uploads/151228/124_151228165345iuBbx7Mn8g2DSO7R.pdf",
    "page": 5
  },
  "methodLinks": [
    {
      "methodId": "hm-lhopital",
      "verification": "verified",
      "note": "独立二次核对来源 第 5 页图 第 9 题：变上限积分求导后用等价量比较分子分母，极限为 1/2。",
      "role": "primary",
      "roleNote": "将零比零商求导，直接建立求极限路线。"
    },
    {
      "methodId": "hm-equivalent-infinitesimal",
      "verification": "verified",
      "note": "独立二次核对来源 第 5 页图 第 9 题：变上限积分求导后用等价量比较分子分母，极限为 1/2。",
      "role": "supporting",
      "roleNote": "简化导数比的局部量，辅助洛必达后的求值。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第5页第9题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
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

## 2017-301-01

```json
{
  "id": "2017-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2017",
  "number": "1",
  "summary": "拼接连续参数",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540317.html",
    "page": 1,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-continuity-piecewise",
      "verification": "verified",
      "note": "独立二次核对来源 第 1 页图 第 1 题：右支以 1−cos√x 等价于 x/2 求极限，和拼接值比较；损坏的第二支范围不作为新增假设。",
      "role": "primary",
      "roleNote": "以左右极限和点值匹配直接求连续参数。"
    },
    {
      "methodId": "hm-equivalent-infinitesimal",
      "verification": "verified",
      "note": "独立二次核对来源 第 1 页图 第 1 题：右支以 1−cos√x 等价于 x/2 求极限，和拼接值比较；损坏的第二支范围不作为新增假设。",
      "role": "supporting",
      "roleNote": "计算可见右支极限，作为连续匹配的中间量。"
    }
  ],
  "sourceNote": "页图第二分支范围排印损坏；只确认可见右支的极限和与拼接值比较的方法，不认证损坏字形。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第1张题面图第1题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
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

## 2018-301-09

```json
{
  "id": "2018-301-09",
  "libraryId": "math-one",
  "paperId": "math-one-2018",
  "number": "9",
  "summary": "幂指极限",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540313.html",
    "page": 2,
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
      "methodId": "hm-power-indeterminate",
      "note": "独立复核：来源第 9 题。第二来源保留 sin(kx) 中的参数；底数在零点附近为正，取对数后用一阶等价。",
      "verification": "verified",
      "role": "primary",
      "roleNote": "取对数并求指数极限，直接确定所问参数。"
    }
  ],
  "sourceNote": "独立复核改用新东方页图；page 为文章内试卷图序号。第14题跨第2、3图，第20题跨第3、4图。原PDF存在遗漏参数、互斥符号、题意等排印问题。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第2张题面图第9题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2018-301-19

```json
{
  "id": "2018-301-19",
  "libraryId": "math-one",
  "paperId": "math-one-2018",
  "number": "19",
  "summary": "递推极限",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540313.html",
    "page": 3,
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
      "methodId": "hm-recursive-limit",
      "note": "独立复核：来源第 19 题。递推取对数后用指数不等式证明正且递减；极限方程结合严格不等式排除正极限。",
      "verification": "verified",
      "role": "primary",
      "roleNote": "正性、单调与极限关系直接完成递推数列求极限。"
    }
  ],
  "sourceNote": "独立复核改用新东方页图；page 为文章内试卷图序号。第14题跨第2、3图，第20题跨第3、4图。原PDF存在遗漏参数、互斥符号、题意等排印问题。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第3张题面图第19题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2019-301-01

```json
{
  "id": "2019-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2019",
  "number": "1",
  "summary": "无穷小阶",
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
      "note": "独立复核：来源第 1 题。正切展开到首个未抵消项，比较差值与幂函数的阶。",
      "methodId": "hm-taylor-limit",
      "verification": "verified",
      "role": "primary",
      "roleNote": "展开到未消项直接比较无穷小阶。"
    }
  ],
  "sourceNote": "独立复核采用新东方页图，page 为图序号；第19题正文在第4图，第23题密度在第5图。部分不等号排印异常，结合原HTML确认适用条件。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第1张题面图第1题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2019-301-18

```json
{
  "id": "2019-301-18",
  "libraryId": "math-one",
  "paperId": "math-one-2019",
  "number": "18",
  "summary": "积分递推",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2019/"
  },
  "methodLinks": [
    {
      "note": "独立复核：来源第 18 题。对积分分部得到跨两项递推，结合单调性夹逼相邻比值；采用 HTML 的 n+2 分母，第二源 n−2 为排印错误。",
      "methodId": "hm-integration-by-parts",
      "verification": "verified",
      "role": "primary",
      "roleNote": "直接证明第一问的积分递推式，并供后续比值极限使用。"
    },
    {
      "methodId": "hm-squeeze",
      "verification": "verified",
      "note": "重读父级HTML第18题(II)，并对照新东方第3图编号；采用HTML正确递推分母n+2。an>0且递减，(n−1)/(n+2)=an/a(n−2)≤an/a(n−1)≤1，两端趋1，夹逼得相邻比值极限1。",
      "role": "primary",
      "roleNote": "夹逼直接完成(II)相邻积分比值极限。"
    }
  ],
  "sourceNote": "保留全文HTML来源；新东方第3图递推分母误排为 n−2，积分分部独立核算应为 n+2。",
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "单调及递推式",
      "methodIds": [
        "hm-integration-by-parts"
      ],
      "evidenceNote": "父级HTML来源第18题（并对照新东方第3张图）第18题明确列出第1个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "相邻积分比值",
      "methodIds": [
        "hm-squeeze"
      ],
      "evidenceNote": "父级HTML来源第18题（并对照新东方第3张图）第18题明确列出第2个独立编号任务；按题面边界录入，不把解答步骤再拆分。父级分部积分仅提供递推中间式；已另核算并补夹逼直接入口。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "父级HTML来源第18题（并对照新东方第3张图）第18题已核对完整题面；共2个独立编号子问，已逐项记录。"
  }
}
```

## 2020-301-01

```json
{
  "id": "2020-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2020",
  "number": "1",
  "summary": "无穷小阶",
  "source": {
    "url": "https://images.eduego.com/Uploads/file/20231226/88d4a0f740e5fb7a74fee2609d3a459c.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "note": "独立复核：来源第 1 题。先比较各被积函数近零幂阶，再连同变上限的阶一起积分，不能只比较被积函数。",
      "verification": "verified",
      "methodId": "hm-infinitesimal-order",
      "role": "primary",
      "roleNote": "计入变限幂次后直接比较各表达式无穷小阶。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第1页第1题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2020-301-09

```json
{
  "id": "2020-301-09",
  "libraryId": "math-one",
  "paperId": "math-one-2020",
  "number": "9",
  "summary": "极限消项",
  "source": {
    "url": "https://images.eduego.com/Uploads/file/20231226/88d4a0f740e5fb7a74fee2609d3a459c.pdf",
    "page": 2
  },
  "methodLinks": [
    {
      "note": "独立复核：来源第 9 题。分母分别展开到二阶，一阶极点相消后保留常数项。",
      "verification": "verified",
      "methodId": "hm-taylor-limit",
      "role": "primary",
      "roleNote": "二阶展开消去一阶极点，直接得到商差极限。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第2页第9题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2021-301-03

```json
{
  "id": "2021-301-03",
  "libraryId": "math-one",
  "paperId": "math-one-2021",
  "number": "3",
  "summary": "泰勒系数",
  "source": {
    "url": "https://edu.xaiu.edu.cn/__local/A/82/2F/B6321C9DAB14C18B56BADCD4A3F_F5BD7903_60505.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "methodId": "hm-taylor-limit",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 1 页第 3 题。将正弦与倒数多项式的展开相乘，保留三次项。 独立复核（2026-09-08，重读题面）：三阶展开含一次项与三次项，展开操作适用。",
      "role": "primary",
      "roleNote": "展开系数直接给所求极限参数。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第3题，PDF物理第1页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2021-301-17

```json
{
  "id": "2021-301-17",
  "libraryId": "math-one",
  "paperId": "math-one-2021",
  "number": "17",
  "summary": "变限积分极限",
  "source": {
    "url": "https://edu.xaiu.edu.cn/__local/A/82/2F/B6321C9DAB14C18B56BADCD4A3F_F5BD7903_60505.pdf",
    "page": 3
  },
  "methodLinks": [
    {
      "methodId": "hm-taylor-limit",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 3 页第 17 题。将分式通分后按抵消程度保留主部，积分项可逐阶积分展开。 独立复核（2026-09-08，重读题面）：分母各为一阶小量，展开积分与指数后消去主项。",
      "role": "primary",
      "roleNote": "保留抵消后的主部直接求极限。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第17题，PDF物理第3页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2022-301-01

```json
{
  "id": "2022-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2022",
  "number": "1",
  "summary": "极限与点值",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2022/"
  },
  "methodLinks": [
    {
      "methodId": "hm-squeeze",
      "verification": "verified",
      "note": "主agent独立重读题面复核：比值极限给出去心邻域有界，乘趋零的对数即可推出函数趋零；不要求点值连续。",
      "role": "primary",
      "roleNote": "有界因子乘趋零量直接判函数极限。"
    }
  ],
  "sourceNote": "原PDF链接本轮连接出现TLS证书错误；改用已逐题阅读核对的公开HTML转载，未认证官方原卷。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第1题，网页按题号定位；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2022-301-03

```json
{
  "id": "2022-301-03",
  "libraryId": "math-one",
  "paperId": "math-one-2022",
  "number": "3",
  "summary": "数列复合极限",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2022/"
  },
  "methodLinks": [
    {
      "methodId": "hm-inverse-limit",
      "verification": "verified",
      "note": "主agent独立重读题面复核：余弦取值在[0,1]，正弦在此区间连续严格单调，反函数连续可传递极限；不能恢复原序列符号。",
      "role": "primary",
      "roleNote": "连续反函数直接判复合数列极限。"
    }
  ],
  "sourceNote": "原PDF链接本轮连接出现TLS证书错误；改用已逐题阅读核对的公开HTML转载，未认证官方原卷。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第3题，网页按题号定位；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2023-301-11

```json
{
  "id": "2023-301-11",
  "libraryId": "math-one",
  "paperId": "math-one-2023",
  "number": "11",
  "summary": "等价无穷小",
  "source": {
    "url": "https://www.ztbu.edu.cn/uploadfile/files/2023/05/07/20230507174051089.pdf",
    "page": 3
  },
  "methodLinks": [
    {
      "methodId": "hm-taylor-limit",
      "verification": "verified",
      "note": "主agent独立重读题面复核：分别展开至首个未抵消阶，匹配等价主项而非只比较函数值。",
      "role": "primary",
      "roleNote": "首个未抵消项直接给等价量。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第11题，PDF物理第3页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2024-301-11

```json
{
  "id": "2024-301-11",
  "libraryId": "math-one",
  "paperId": "math-one-2024",
  "number": "11",
  "summary": "幂指极限",
  "source": {
    "url": "https://gjb.ztbu.edu.cn/attachment/sites/item/2025_09/18_17/1066d05b0b708445.pdf",
    "page": 3
  },
  "methodLinks": [
    {
      "methodId": "hm-power-indeterminate",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 11 题：先对变幂取对数，再按所需三阶展开，最后用 exp u−1 与 u 等价。",
      "role": "supporting",
      "roleNote": "取对数是转成可展开表达式的中间变换。"
    },
    {
      "methodId": "hm-taylor-limit",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 11 题：先对变幂取对数，再按所需三阶展开，最后用 exp u−1 与 u 等价。",
      "role": "primary",
      "roleNote": "保留三阶主项直接解极限参数。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第11题，PDF物理第3页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2024-301-13

```json
{
  "id": "2024-301-13",
  "libraryId": "math-one",
  "paperId": "math-one-2024",
  "number": "13",
  "summary": "余弦系数极限",
  "source": {
    "url": "https://gjb.ztbu.edu.cn/attachment/sites/item/2025_09/18_17/1066d05b0b708445.pdf",
    "page": 3
  },
  "methodLinks": [
    {
      "methodId": "hm-fourier-half-range",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 13 题：半区间余弦系数积分求出后，利用小角正弦等价量处理奇指标极限。",
      "role": "supporting",
      "roleNote": "先求目标极限中使用的奇指标系数。"
    },
    {
      "methodId": "hm-equivalent-infinitesimal",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 13 题：半区间余弦系数积分求出后，利用小角正弦等价量处理奇指标极限。",
      "role": "primary",
      "roleNote": "系数趋零后用正弦等价直接计算目标极限。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第13题，PDF物理第3页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2025-301-03

```json
{
  "id": "2025-301-03",
  "libraryId": "math-one",
  "paperId": "math-one-2025",
  "number": "3",
  "summary": "平均极限",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2025/",
    "metadata": {
      "publisher": "CS Graduates社区网站（整理者未核实）",
      "level": "third-party",
      "checkedOn": "2026-09-08",
      "availability": "available",
      "evidence": "2026-09-08已有实际阅读记录。实际阅读并复核第3题题面和方法适用条件；当前资源是社区转载，不继承原卷高校托管身份。",
      "bodyMode": "external-link",
      "rightsNote": "未核实题面及第三方解析的转载许可；仓库仅提供外部链接、原创短摘要和独立方法关联说明，不收录整套题面或转载解析。"
    }
  },
  "methodLinks": [
    {
      "methodId": "hm-lhopital",
      "verification": "verified",
      "note": "独立重读两源第 3 题：采用闭端点版本，积分有限且变上限原函数可导。分母 x→∞、导数为 1，分子导数 f(x) 有极限；已用柯西中值定理独立复核新版分母无穷法则，不再要求积分分子趋无穷。",
      "role": "primary",
      "roleNote": "闭端点可积版本下直接求平均极限的一条路线。"
    },
    {
      "methodId": "hm-integral-inequality",
      "verification": "verified",
      "note": "独立重读闭端点题面：连续性保证有限首段积分存在；分段后首段除 x 趋零，尾段由 |f−a|<ε 控制。高校 PDF 的开端点版本须另补零端可积条件，不能无条件沿用。",
      "role": "primary",
      "roleNote": "分段尾部估计是独立完成同一极限的替代路线。"
    }
  ],
  "sourceNote": "高校 PDF 第 3 页写 (0,+∞)，不足以保证零端积分存在；本链接第 3 题写 [0,+∞) 上可导，修复此端点条件。关联按后者清晰版本核验；两个转载来源均非官方认证，未默认开端点函数可积。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第3题，网页按题号定位；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2025-301-11

```json
{
  "id": "2025-301-11",
  "libraryId": "math-one",
  "paperId": "math-one-2025",
  "number": "11",
  "summary": "幂指极限",
  "source": {
    "url": "https://gjb.ztbu.edu.cn/attachment/sites/item/2025_09/18_17/ab27a44c5f0cbe5e.pdf",
    "page": 8
  },
  "methodLinks": [
    {
      "methodId": "hm-equivalent-infinitesimal",
      "verification": "verified",
      "note": "原题第8页第11题：幂先写为指数。 独立复核：将幂指项转成指数，检查指数趋零后作等价替换，不在相减前分别替换。",
      "role": "primary",
      "roleNote": "指数等价替换直接求幂指极限。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第11题，PDF物理第8页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2026-301-12

```json
{
  "id": "2026-301-12",
  "libraryId": "math-one",
  "paperId": "math-one-2026",
  "number": "12",
  "summary": "差式极限",
  "source": {
    "url": "https://cdn.liiistem.cn/library/2026-test-math1.pdf",
    "page": 5
  },
  "methodLinks": [
    {
      "methodId": "hm-taylor-limit",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 5 页第 12 题。先通分再比较正弦与对数的展开，不能对相减项分别作首阶替换。 独立复核（2026-09-08，重读题面）：对数与正弦按所需阶数展开后消去共同主项。",
      "role": "primary",
      "roleNote": "展开抵消直接给差式极限。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第12题，PDF物理第5页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```
