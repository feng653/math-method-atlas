# 既有题目记录摘录

供作者核对；只表示既有数据库记录，不是本轮重新核验，不能继承到新方法频次。不得复制整套外部解析。

## 2009-301-03

```json
{
  "id": "2009-301-03",
  "libraryId": "math-one",
  "paperId": "math-one-2009",
  "number": "3",
  "summary": "变限积分图像",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2009/"
  },
  "methodLinks": [
    {
      "methodId": "hm-newton-leibniz",
      "verification": "verified",
      "note": "独立方法关联复核：已看原函数及四个选项图；变限积分连续，连续段导数等于 f，零点及面积决定图形；间断端点单独看单侧斜率。",
      "role": "primary",
      "roleNote": "由变限函数的导数与累积面积直接筛选其图像。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第3题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2009-301-16

```json
{
  "id": "2009-301-16",
  "libraryId": "math-one",
  "paperId": "math-one-2009",
  "number": "16",
  "summary": "面积级数求和",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2009/"
  },
  "methodLinks": [
    {
      "methodId": "hm-integral-area-volume",
      "verification": "verified",
      "note": "独立方法关联复核：先对相邻幂函数之差积分得面积，再对得到的有理项消项，奇数子项可由对数幂级数求和。",
      "role": "supporting",
      "roleNote": "先将相邻幂曲线间面积写成级数通项，供后续求和。"
    },
    {
      "methodId": "hm-power-sum",
      "verification": "verified",
      "note": "独立方法关联复核：先对相邻幂函数之差积分得面积，再对得到的有理项消项，奇数子项可由对数幂级数求和。",
      "role": "primary",
      "roleNote": "用对数级数直接求所问奇数子项和。"
    },
    {
      "methodId": "hm-series-basic",
      "verification": "verified",
      "role": "primary",
      "roleNote": "直接通过裂项部分和极限求题目要求的全项面积和S₁。",
      "note": "未编号任务独立核验：原题无编号并列求S₁与奇数子项和S₂。相邻幂曲线面积aₙ=∫₀¹(xⁿ−xⁿ⁺¹)dx=1/(n+1)−1/(n+2)。S₁的N项部分和为1/2−1/(N+2)，极限1/2；直接用裂项和有限部分和极限，未交换无限求和与积分。原hm-power-sum承担S₂，新增入口补S₁。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第16题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2009-301-17

```json
{
  "id": "2009-301-17",
  "libraryId": "math-one",
  "paperId": "math-one-2009",
  "number": "17",
  "summary": "相切旋转体",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2009/"
  },
  "methodLinks": [
    {
      "methodId": "hm-quadric-surfaces",
      "verification": "verified",
      "note": "独立方法关联复核：平面椭圆切线旋转构成二次曲面，沿旋转轴写外内截面积差求体积；不把识别卡当作完整构造步骤。",
      "role": "primary",
      "roleNote": "对应第Ⅰ问的旋转后曲面方程识别，不代表全部构造步骤。"
    },
    {
      "methodId": "hm-integral-area-volume",
      "verification": "verified",
      "note": "独立方法关联复核：平面椭圆切线旋转构成二次曲面，沿旋转轴写外内截面积差求体积；不把识别卡当作完整构造步骤。",
      "role": "primary",
      "roleNote": "沿旋转轴积分截面积差，直接完成第Ⅱ问体积。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "构造两旋转曲面方程",
      "methodIds": [
        "hm-quadric-surfaces"
      ],
      "evidenceNote": "所选来源第17题题面明确列出(I)任务；按原题标号边界记录，不拆解答步骤。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "计算曲面间体积",
      "methodIds": [
        "hm-integral-area-volume"
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

## 2010-301-03

```json
{
  "id": "2010-301-03",
  "libraryId": "math-one",
  "paperId": "math-one-2010",
  "number": "3",
  "summary": "端点反常积分",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2010/"
  },
  "methodLinks": [
    {
      "methodId": "hm-improper-integral",
      "verification": "verified",
      "note": "独立方法关联复核：从根式层级辨认零端比较幂为2/m−1/n，正整数参数使其大于−1；另一端为可积对数幂奇性。",
      "role": "primary",
      "roleNote": "比较两个奇端的幂次，直接判断反常积分收敛。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第3题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2010-301-04

```json
{
  "id": "2010-301-04",
  "libraryId": "math-one",
  "paperId": "math-one-2010",
  "number": "4",
  "summary": "双重求和极限",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2010/"
  },
  "methodLinks": [
    {
      "methodId": "hm-riemann-sum",
      "verification": "verified",
      "note": "独立方法关联复核：双重和可分离成两个一维Riemann和的乘积，也等价于单位正方形累次积分，避免把一维卡生搬到一般二维。",
      "role": "primary",
      "roleNote": "把双重求和拆为一维Riemann和，直接确定极限。"
    },
    {
      "methodId": "hm-double-cartesian",
      "verification": "verified",
      "note": "独立方法关联复核：双重和可分离成两个一维Riemann和的乘积，也等价于单位正方形累次积分，避免把一维卡生搬到一般二维。",
      "role": "supporting",
      "roleNote": "累次积分计算Riemann和转化后的数值。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第4题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  },
  "statement": {
    "intro": "选择与下列极限相等的累次积分。",
    "formulas": [
      "\\lim_{n\\to\\infty}\\sum_{i=1}^n\\sum_{j=1}^n\\frac{n}{(n+i)(n^2+j^2)}"
    ],
    "tasks": [
      "从下列四个选项中选择一项。"
    ],
    "checkedOn": "2026-09-09",
    "note": "按来源核对数学条件并重新表述题面，未转载解析。",
    "options": [
      "\\int_0^1\\mathrm dx\\int_0^x\\frac{1}{(1+x)(1+y^2)}\\,\\mathrm dy",
      "\\int_0^1\\mathrm dx\\int_0^x\\frac{1}{(1+x)(1+y)}\\,\\mathrm dy",
      "\\int_0^1\\mathrm dx\\int_0^1\\frac{1}{(1+x)(1+y)}\\,\\mathrm dy",
      "\\int_0^1\\mathrm dx\\int_0^1\\frac{1}{(1+x)(1+y^2)}\\,\\mathrm dy"
    ],
    "source": {
      "url": "https://www.csgraduates.com/study_methods/math/math1/2010/#4"
    }
  }
}
```

## 2010-301-10

```json
{
  "id": "2010-301-10",
  "libraryId": "math-one",
  "paperId": "math-one-2010",
  "number": "10",
  "summary": "根式定积分",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2010/"
  },
  "methodLinks": [
    {
      "methodId": "hm-substitution-integral",
      "verification": "verified",
      "note": "独立方法关联复核：根式结构以 x=t² 代换，分母与微分因子约消，并同步更换有限积分上下限。",
      "role": "primary",
      "roleNote": "平方代换约去根式因子并换端点，直接完成定积分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第10题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
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

## 2011-301-04

```json
{
  "id": "2011-301-04",
  "libraryId": "math-one",
  "paperId": "math-one-2011",
  "number": "4",
  "summary": "对数积分比较",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2011/"
  },
  "methodLinks": [
    {
      "methodId": "hm-integral-inequality",
      "verification": "verified",
      "note": "独立方法关联复核：在(0,π/4)逐点比较sin、cos、cot的对数；端点对数反常积分可积，积分保序。",
      "role": "primary",
      "roleNote": "比较区间内对数函数的大小，直接推出积分排序。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第4题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2011-301-09

```json
{
  "id": "2011-301-09",
  "libraryId": "math-one",
  "paperId": "math-one-2011",
  "number": "9",
  "summary": "积分曲线弧长",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2011/"
  },
  "methodLinks": [
    {
      "methodId": "hm-arc-work-integral",
      "verification": "verified",
      "note": "独立方法关联复核：变上限积分导数为tan x，弧长元是√(1+tan²x)dx；明确不采用镜像PDF误写成(tan x)²的解析。",
      "role": "primary",
      "roleNote": "把曲线导数代入弧长元，直接算弧长。"
    },
    {
      "methodId": "hm-newton-leibniz",
      "verification": "verified",
      "note": "独立方法关联复核：变上限积分导数为tan x，弧长元是√(1+tan²x)dx；明确不采用镜像PDF误写成(tan x)²的解析。",
      "role": "supporting",
      "roleNote": "恢复变上限积分的导数，为弧长元提供斜率。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第9题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2011-301-11

```json
{
  "id": "2011-301-11",
  "libraryId": "math-one",
  "paperId": "math-one-2011",
  "number": "11",
  "summary": "变上限积分表达式在指定点的二阶偏导",
  "source": {
    "url": "https://doc.kmf.com/ky_material/9d/6b/9d6bef7c75bbc53cd3467885eacaa600.pdf",
    "page": 4,
    "metadata": {
      "publisher": "考满分KMF（第三方托管；原编者未核实）",
      "level": "third-party",
      "checkedOn": "2026-09-08",
      "availability": "available",
      "evidence": "2026-09-08已有实际阅读记录。实际查看PDF第4页对应题面。确认二重积分内层上限为xy；该资料其他题解析有错误，未作为标准答案。",
      "bodyMode": "external-link",
      "rightsNote": "未核实题面及第三方解析的转载许可；仓库仅提供外部链接、原创短摘要和独立方法关联说明，不收录整套题面或转载解析。"
    }
  },
  "methodLinks": [
    {
      "methodId": "hm-newton-leibniz",
      "verification": "verified",
      "note": "独立方法关联复核：视觉核对KMF镜像PDF第4页，积分上限是xy而非社区漏字后的y；两次链式求导后在指定点代入。",
      "role": "supporting",
      "roleNote": "把积分函数的一阶导数转成上限值，供混合偏导链式计算。"
    },
    {
      "methodId": "hm-multivariable-chain",
      "verification": "verified",
      "note": "独立方法关联复核：视觉核对KMF镜像PDF第4页，积分上限是xy而非社区漏字后的y；两次链式求导后在指定点代入。",
      "role": "primary",
      "roleNote": "对xy上限连续链式求导并代点，直接求目标偏导。"
    }
  ],
  "sourceNote": "独立视觉核对镜像PDF第4页，积分上限为xy，修复原社区来源漏x；来源仍为第三方，后附解析不作为证据。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第11题题面（PDF物理页4）已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
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

## 2011-301-19

```json
{
  "id": "2011-301-19",
  "libraryId": "math-one",
  "paperId": "math-one-2011",
  "number": "19",
  "summary": "混合偏导积分",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2011/"
  },
  "methodLinks": [
    {
      "methodId": "hm-double-cartesian",
      "verification": "verified",
      "note": "独立方法关联复核：矩形域上连续混合偏导可累次积分，两次分部，边界给定恒等式及其导数使边界项消失。",
      "role": "supporting",
      "roleNote": "把矩形二重积分累次化，为分部积分准备一维积分。"
    },
    {
      "methodId": "hm-integration-by-parts",
      "verification": "verified",
      "note": "独立方法关联复核：矩形域上连续混合偏导可累次积分，两次分部，边界给定恒等式及其导数使边界项消失。",
      "role": "primary",
      "roleNote": "两次分部配合零边界直接还原所求积分与已知a的关系。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第19题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  },
  "statement": {
    "intro": "f 具有二阶连续偏导数，并满足以下边界条件和积分条件。",
    "formulas": [
      "f(1,y)=0,\\qquad f(x,1)=0",
      "D=\\{(x,y)\\mid0\\le x\\le1,\\;0\\le y\\le1\\}",
      "\\iint_D f(x,y)\\,\\mathrm dx\\mathrm dy=a",
      "I=\\iint_D xy\\frac{\\partial^2 f}{\\partial x\\partial y}(x,y)\\,\\mathrm dx\\mathrm dy"
    ],
    "tasks": [
      "用 a 表示积分 I。"
    ],
    "checkedOn": "2026-09-09",
    "note": "按来源核对数学条件并重新表述题面，未转载解析。",
    "source": {
      "url": "https://www.csgraduates.com/study_methods/math/math1/2011/#19"
    }
  }
}
```

## 2012-301-04

```json
{
  "id": "2012-301-04",
  "libraryId": "math-one",
  "paperId": "math-one-2012",
  "number": "4",
  "summary": "积分比较",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2012/#4"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 4 题。按每个半周期平移，指数权重递增而正弦交替变号，比较相邻面积。",
      "methodId": "hm-integral-inequality",
      "role": "primary",
      "roleNote": "按半周期比较加权正负面积，直接判定积分大小。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第4题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2012-301-10

```json
{
  "id": "2012-301-10",
  "libraryId": "math-one",
  "paperId": "math-one-2012",
  "number": "10",
  "summary": "根式积分",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2012/#10"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 10 题。根式配成圆弧形式后作平移正弦换元，连同端点变换。",
      "methodId": "hm-trig-substitution",
      "role": "primary",
      "roleNote": "平移正弦代换处理圆型根式，直接计算积分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第10题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2012-301-18

```json
{
  "id": "2012-301-18",
  "libraryId": "math-one",
  "paperId": "math-one-2012",
  "number": "18",
  "summary": "切线建模",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2012/#18"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 18 题。参数切向量给切线截距距离约束，从正导数选分支，再以参数面积积分。",
      "methodId": "hm-ode-modeling",
      "role": "primary",
      "roleNote": "把切线距离约束转为变化率方程，直接求原题所要求的函数表达式。"
    },
    {
      "methodId": "hm-integral-area-volume",
      "verification": "verified",
      "role": "primary",
      "note": "独立完成度复审：参数曲线x=f(t)、y=cos t，0≤t<π/2。由切线横截距差及距离1、f′>0得到f′=sin²t/cos t；对每个T<π/2，曲线下截断面积为∫₀ᵀcos t·f′(t)dt=∫₀ᵀsin²t dt。令T↑π/2，面积为π/4；积分是非负上减下薄片，参数方向由f′>0保证。",
      "roleNote": "直接完成原题另要求的面积，没有人为给该并列任务添加子问编号。"
    },
    {
      "methodId": "hm-improper-integral",
      "verification": "verified",
      "role": "supporting",
      "note": "独立完成度复审：f(t)=ln(sec t+tan t)−sin t在t↑π/2时趋∞，所求区域无界。先在x=f(T)处截断，再由面积∫₀ᵀsin²t dt的极限π/4定义收敛反常面积；不能把无穷横坐标当作有限闭曲线交点。",
      "roleNote": "为面积计算处理无穷横坐标端点的截断极限。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第18题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2013-301-12

```json
{
  "id": "2013-301-12",
  "libraryId": "math-one",
  "paperId": "math-one-2013",
  "number": "12",
  "summary": "反常积分",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2013/#12"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 12 题。先在有限区间分部积分，边界项在无穷远消失，余下有理函数积分收敛。",
      "methodId": "hm-integration-by-parts",
      "role": "primary",
      "roleNote": "有限区间分部后取无穷极限，直接算反常积分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第12题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
  }
}
```

## 2013-301-15

```json
{
  "id": "2013-301-15",
  "libraryId": "math-one",
  "paperId": "math-one-2013",
  "number": "15",
  "summary": "嵌套积分",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2013/#15"
  },
  "methodLinks": [
    {
      "verification": "verified",
      "note": "独立复核：来源第 15 题。变限积分作为分部因子，其导数恢复被积函数；零端需检验边界项极限。",
      "methodId": "hm-integration-by-parts",
      "role": "primary",
      "roleNote": "以变限积分为分部因子并核边界，直接求嵌套积分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "所选来源第15题题面已阅读完整作答要求，没有单独编号子问；选项及未编号的并列求值不拆分。"
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

## 2015-301-10

```json
{
  "id": "2015-301-10",
  "libraryId": "math-one",
  "paperId": "math-one-2015",
  "number": "10",
  "summary": "对称区间积分",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540418.html",
    "page": 2,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-definite-symmetry",
      "verification": "verified",
      "note": "独立二次核对来源 第 2 页图 第 10 题：对称区间上分离奇函数零积分和绝对值偶函数积分。",
      "role": "primary",
      "roleNote": "对称性分解直接完成定积分求值。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第2张题面图第10题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2016-301-01

```json
{
  "id": "2016-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2016",
  "number": "1",
  "summary": "双端积分敛散",
  "source": {
    "url": "https://file.xdf.cn/uploads/151228/124_151228165345iuBbx7Mn8g2DSO7R.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "methodId": "hm-improper-integral",
      "verification": "verified",
      "note": "独立二次核对来源 第 1 页图 第 1 题：分别在零点与无穷远作幂函数比较，两端可积条件都要满足。",
      "role": "primary",
      "roleNote": "两端比较直接给反常积分收敛的参数条件。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第1页第1题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
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

## 2016-301-16

```json
{
  "id": "2016-301-16",
  "libraryId": "math-one",
  "paperId": "math-one-2016",
  "number": "16",
  "summary": "衰减解反常积分",
  "source": {
    "url": "https://file.xdf.cn/uploads/151228/124_151228165345iuBbx7Mn8g2DSO7R.pdf",
    "page": 8
  },
  "methodLinks": [
    {
      "methodId": "hm-ode-characteristic",
      "verification": "verified",
      "note": "独立二次核对来源 第 8 页图 第 16 题：特征根 −1±√(1−k) 都负，指数解在正半轴可积，再结合初值求积分。",
      "role": "supporting",
      "roleNote": "求指数解及衰减性，准备反常积分证明与求值。"
    },
    {
      "methodId": "hm-improper-integral",
      "verification": "verified",
      "note": "独立二次核对来源 第 8 页图 第 16 题：特征根 −1±√(1−k) 都负，指数解在正半轴可积，再结合初值求积分。",
      "role": "primary",
      "roleNote": "直接完成收敛证明及给定初值下积分求值两问。"
    }
  ],
  "subquestions": [
    {
      "id": "part-1",
      "label": "(I)",
      "summary": "积分收敛证明",
      "methodIds": [
        "hm-ode-characteristic",
        "hm-improper-integral"
      ],
      "evidenceNote": "来源PDF物理第8页第16题明确列出第1个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    },
    {
      "id": "part-2",
      "label": "(II)",
      "summary": "初值积分求值",
      "methodIds": [
        "hm-ode-characteristic",
        "hm-improper-integral"
      ],
      "evidenceNote": "来源PDF物理第8页第16题明确列出第2个独立编号任务；按题面边界录入，不把解答步骤再拆分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 2,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第8页第16题已核对完整题面；共2个独立编号子问，已逐项记录。"
  }
}
```

## 2017-301-04

```json
{
  "id": "2017-301-04",
  "libraryId": "math-one",
  "paperId": "math-one-2017",
  "number": "4",
  "summary": "追及面积关系",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540317.html",
    "page": 1,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-newton-leibniz",
      "verification": "verified",
      "note": "独立二次核对来源 第 1 页图 第 4 题：位置差等于初始距离加速度差的定积分；按图上有向面积判断。",
      "role": "primary",
      "roleNote": "积分速度差得到位置差，直接判断追及关系。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第1张题面图第4题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2017-301-16

```json
{
  "id": "2017-301-16",
  "libraryId": "math-one",
  "paperId": "math-one-2017",
  "number": "16",
  "summary": "求和极限",
  "source": {
    "url": "https://kaoyan.xdf.cn/202310/13540317.html",
    "page": 3,
    "locatorKind": "image-index"
  },
  "methodLinks": [
    {
      "methodId": "hm-riemann-sum",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 16 题：把和式整理为网格宽 1/n 的黎曼和，再对对数积分分部积分。",
      "role": "primary",
      "roleNote": "把求和极限转换为可求值积分，直接构成极限路线。"
    },
    {
      "methodId": "hm-integration-by-parts",
      "verification": "verified",
      "note": "独立二次核对来源 第 3 页图 第 16 题：把和式整理为网格宽 1/n 的黎曼和，再对对数积分分部积分。",
      "role": "supporting",
      "roleNote": "计算转换后积分的内部计算步骤。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第3张题面图第16题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2018-301-04

```json
{
  "id": "2018-301-04",
  "libraryId": "math-one",
  "paperId": "math-one-2018",
  "number": "4",
  "summary": "积分比较",
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
      "methodId": "hm-integral-inequality",
      "verification": "verified",
      "note": "独立重看新东方第1图第4题：对称消奇项后M=π；cos x在区间内部正，故K=π+∫√cos x dx>π。由e^x≥1+x且仅x=0取等，得(1+x)e^(−x)≤1并在其余点严格小于1，因此N<π，直接确定K>M>N。三被积函数在闭区间连续，严格积分比较合法。",
      "role": "primary",
      "roleNote": "对称化后以常数π为共同界，严格积分比较直接确定三个积分的完整排序。"
    },
    {
      "methodId": "hm-definite-symmetry",
      "note": "独立复核：来源第 4 题。对称区间消去奇函数项，再用非负项和指数函数比较剩余积分。",
      "verification": "verified",
      "role": "supporting",
      "roleNote": "先消去奇函数积分，最终排序还依赖剩余项的大小估计。"
    }
  ],
  "sourceNote": "独立复核改用新东方页图；page 为文章内试卷图序号。第14题跨第2、3图，第20题跨第3、4图。原PDF存在遗漏参数、互斥符号、题意等排印问题。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第1张题面图第4题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2018-301-10

```json
{
  "id": "2018-301-10",
  "libraryId": "math-one",
  "paperId": "math-one-2018",
  "number": "10",
  "summary": "分部积分",
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
      "methodId": "hm-integration-by-parts",
      "note": "独立复核：来源第 10 题。相切给出端点函数值和导数值，分部积分把二阶导积分化成边界项。",
      "verification": "verified",
      "role": "primary",
      "roleNote": "边界切线数据进入分部公式，直接算所求积分。"
    }
  ],
  "sourceNote": "独立复核改用新东方页图；page 为文章内试卷图序号。第14题跨第2、3图，第20题跨第3、4图。原PDF存在遗漏参数、互斥符号、题意等排印问题。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第2张题面图第10题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2018-301-15

```json
{
  "id": "2018-301-15",
  "libraryId": "math-one",
  "paperId": "math-one-2018",
  "number": "15",
  "summary": "反三角积分",
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
      "methodId": "hm-substitution-integral",
      "note": "独立复核：来源第 15 题。以根式作变量把指数积分变成多项式乘反正切，再分部积分。",
      "verification": "verified",
      "role": "primary",
      "roleNote": "根式换元构成直接求原积分的路线，再完成常规积分。"
    }
  ],
  "sourceNote": "独立复核改用新东方页图；page 为文章内试卷图序号。第14题跨第2、3图，第20题跨第3、4图。原PDF存在遗漏参数、互斥符号、题意等排印问题。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第3张题面图第15题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2019-301-17

```json
{
  "id": "2019-301-17",
  "libraryId": "math-one",
  "paperId": "math-one-2019",
  "number": "17",
  "summary": "无界面积",
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
      "note": "独立复核：来源第 17 题。几何面积积分须取绝对值，按正弦半周期分段并把衰减因子组成几何级数。",
      "methodId": "hm-integral-area-volume",
      "verification": "verified",
      "role": "primary",
      "roleNote": "分半周期累加非负面积，直接求无界区域面积。"
    }
  ],
  "sourceNote": "独立复核采用新东方页图，page 为图序号；第19题正文在第4图，第23题密度在第5图。部分不等号排印异常，结合原HTML确认适用条件。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "新东方文章第3张题面图第17题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
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

## 2020-301-11

```json
{
  "id": "2020-301-11",
  "libraryId": "math-one",
  "paperId": "math-one-2020",
  "number": "11",
  "summary": "方程反常积分",
  "source": {
    "url": "https://images.eduego.com/Uploads/file/20231226/88d4a0f740e5fb7a74fee2609d3a459c.pdf",
    "page": 2
  },
  "methodLinks": [
    {
      "methodId": "hm-improper-integral",
      "verification": "verified",
      "note": "独立渲染核对来源PDF第2页第11题：f″+af′+f=0，a>0，f(0)=m、f′(0)=n。特征根实部均负（重根时多项式乘衰减指数），故f、f′趋0。由原式可取f的原函数−f′−af，先在[0,R]积分得n+am−f′(R)−af(R)，再令R趋∞得am+n；截断极限存在，不能直接把无穷端当普通端点代入。",
      "role": "primary",
      "roleNote": "使用由方程得到的原函数，在有限区间计算后取极限，直接求反常积分值am+n。"
    },
    {
      "note": "独立复核：来源第 11 题。正阻尼使特征根实部为负，解和导数趋零；积分微分方程得到反常积分。",
      "verification": "verified",
      "methodId": "hm-ode-characteristic",
      "role": "supporting",
      "roleNote": "在现有路线中只证明解及导数衰减，积分值还需对方程积分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "来源PDF物理第2页第11题已核对完整题面；无独立编号子问；选择选项、并列求值动作或解析编号不另建子问。"
  }
}
```

## 2021-301-04

```json
{
  "id": "2021-301-04",
  "libraryId": "math-one",
  "paperId": "math-one-2021",
  "number": "4",
  "summary": "积分和式辨析",
  "source": {
    "url": "https://edu.xaiu.edu.cn/__local/A/82/2F/B6321C9DAB14C18B56BADCD4A3F_F5BD7903_60505.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "methodId": "hm-riemann-sum",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 1 页第 4 题。同时核对采样点、分割数与每段宽度。 独立复核（2026-09-08，重读题面）：连续函数可积；中点采样必须与区间宽度匹配。",
      "role": "primary",
      "roleNote": "积分定义直接判别和式选项。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第4题，PDF物理第1页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2021-301-11

```json
{
  "id": "2021-301-11",
  "libraryId": "math-one",
  "paperId": "math-one-2021",
  "number": "11",
  "summary": "反常有理积分",
  "source": {
    "url": "https://edu.xaiu.edu.cn/__local/A/82/2F/B6321C9DAB14C18B56BADCD4A3F_F5BD7903_60505.pdf",
    "page": 3
  },
  "methodLinks": [
    {
      "methodId": "hm-improper-integral",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 3 页第 11 题。先截断无穷上限，再取积分极限。 独立复核（2026-09-08，重读题面）：二次分母无实零点，可配方求原函数后取无穷上限。",
      "role": "primary",
      "roleNote": "截断后取无穷上限直接定义并计算目标积分。"
    },
    {
      "methodId": "hm-rational-integral",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 3 页第 11 题。分母配成平方和，使用反正切原函数。 独立复核（2026-09-08，重读题面）：二次分母无实零点，可配方求原函数后取无穷上限。",
      "role": "supporting",
      "roleNote": "配方反正切用于计算截断积分的原函数。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第11题，PDF物理第3页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2022-301-04

```json
{
  "id": "2022-301-04",
  "libraryId": "math-one",
  "paperId": "math-one-2022",
  "number": "4",
  "summary": "积分大小",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2022/"
  },
  "methodLinks": [
    {
      "methodId": "hm-integral-inequality",
      "verification": "verified",
      "note": "主agent独立重读题面复核：先在相同区间比较被积函数，分母保持正号，再用定积分保序。",
      "role": "primary",
      "roleNote": "积分保序直接比较大小。"
    }
  ],
  "sourceNote": "原PDF链接本轮连接出现TLS证书错误；改用已逐题阅读核对的公开HTML转载，未认证官方原卷。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第4题，网页按题号定位；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2022-301-12

```json
{
  "id": "2022-301-12",
  "libraryId": "math-one",
  "paperId": "math-one-2022",
  "number": "12",
  "summary": "对数积分",
  "source": {
    "url": "https://www.csgraduates.com/study_methods/math/math1/2022/"
  },
  "methodLinks": [
    {
      "methodId": "hm-integration-by-parts",
      "verification": "verified",
      "note": "主agent独立重读题面复核：将对数作为待微分因子，另一幂函数求原函数后处理端点。",
      "role": "primary",
      "roleNote": "分部积分直接求对数积分。"
    }
  ],
  "sourceNote": "原PDF链接本轮连接出现TLS证书错误；改用已逐题阅读核对的公开HTML转载，未认证官方原卷。",
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第12题，网页按题号定位；完整核对题干，未见显式作答子问编号；选项不计。"
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

## 2023-301-14

```json
{
  "id": "2023-301-14",
  "libraryId": "math-one",
  "paperId": "math-one-2023",
  "number": "14",
  "summary": "平移积分",
  "source": {
    "url": "https://www.ztbu.edu.cn/uploadfile/files/2023/05/07/20230507174051089.pdf",
    "page": 3
  },
  "methodLinks": [
    {
      "methodId": "hm-definite-symmetry",
      "verification": "verified",
      "note": "主agent独立重读题面复核：平移积分区间并扣除重叠段，使用给定的函数差关系。",
      "role": "primary",
      "roleNote": "区间平移直接利用函数差求积分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第14题，PDF物理第3页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2024-301-01

```json
{
  "id": "2024-301-01",
  "libraryId": "math-one",
  "paperId": "math-one-2024",
  "number": "1",
  "summary": "积分奇偶性",
  "source": {
    "url": "https://gjb.ztbu.edu.cn/attachment/sites/item/2025_09/18_17/1066d05b0b708445.pdf",
    "page": 1
  },
  "methodLinks": [
    {
      "methodId": "hm-definite-symmetry",
      "verification": "verified",
      "note": "独立二次核对来源 第 1 页图 第 1 题：变上限积分先换元比较正负自变量，利用被积函数奇偶性判原函数奇偶性。",
      "role": "primary",
      "roleNote": "奇偶换元直接判变限函数性质。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第1题，PDF物理第1页；完整核对题干，未见显式作答子问编号；选项不计。"
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

## 2025-301-17

```json
{
  "id": "2025-301-17",
  "libraryId": "math-one",
  "paperId": "math-one-2025",
  "number": "17",
  "summary": "有理积分",
  "source": {
    "url": "https://gjb.ztbu.edu.cn/attachment/sites/item/2025_09/18_17/ab27a44c5f0cbe5e.pdf",
    "page": 11
  },
  "methodLinks": [
    {
      "methodId": "hm-rational-integral",
      "verification": "verified",
      "note": "原题第11页第17题：分母拆因子再积分。 独立复核：对一次因子与不可约二次因子作部分分式，再分成对数与反正切原函数。",
      "role": "primary",
      "roleNote": "部分分式积分直接求有理积分。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第17题，PDF物理第11页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2026-301-14

```json
{
  "id": "2026-301-14",
  "libraryId": "math-one",
  "paperId": "math-one-2026",
  "number": "14",
  "summary": "对数反常积分",
  "source": {
    "url": "https://cdn.liiistem.cn/library/2026-test-math1.pdf",
    "page": 6
  },
  "methodLinks": [
    {
      "methodId": "hm-integration-by-parts",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 6 页第 14 题。对数作求导因子，幂函数作积分因子。 独立复核（2026-09-08，重读题面）：正无穷端的对数除以自变量趋零，分部后余项可积。",
      "role": "primary",
      "roleNote": "分部积分是求目标对数积分的直接路线。"
    },
    {
      "methodId": "hm-improper-integral",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 6 页第 14 题。边界项及剩余积分均在截断后取极限。 独立复核（2026-09-08，重读题面）：正无穷端的对数除以自变量趋零，分部后余项可积。",
      "role": "supporting",
      "roleNote": "对该路线的边界项与余项提供截断取极限控制。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第14题，PDF物理第6页；完整核对题干，未见显式作答子问编号；选项不计。"
  }
}
```

## 2026-301-19

```json
{
  "id": "2026-301-19",
  "libraryId": "math-one",
  "paperId": "math-one-2026",
  "number": "19",
  "summary": "椭圆弧积分",
  "source": {
    "url": "https://cdn.liiistem.cn/library/2026-test-math1.pdf",
    "page": 9
  },
  "methodLinks": [
    {
      "methodId": "hm-green",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 9 页第 19 题。补直径线段闭合路径，格林公式求闭路积分后扣除补线。 独立复核（2026-09-08，重读题面）：补直径形成闭合域且场光滑，补线中的奇函数积分可消去。",
      "role": "primary",
      "roleNote": "补线格林计算直接求椭圆弧积分。"
    },
    {
      "methodId": "hm-definite-symmetry",
      "verification": "verified",
      "note": "初录候选：来源 PDF 第 9 页第 19 题。补线参数积分利用奇偶性减少计算，同时保留方向。 独立复核（2026-09-08，重读题面）：补直径形成闭合域且场光滑，补线中的奇函数积分可消去。",
      "role": "supporting",
      "roleNote": "补线积分的奇偶抵消用于简化计算。"
    }
  ],
  "subquestionAudit": {
    "expectedCount": 0,
    "checkedOn": "2026-09-08",
    "note": "当前来源第19题，PDF物理第9页；完整核对题干，未见显式作答子问编号；选项不计。"
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
