###深入理解margin负值

网上对负值margin的解释文章不少，大多都是摘抄或者直接链接某大神的深入浅出margin博客，在我仔细阅读后，发现该文章存在一些纰漏，于是在Google上着了一篇对应的英文分析文章，相对清晰，总结并翻译了以下内容。
对于margin负值分为以下两种场景：
1. 在固定元素上使用负值margin
1.1 margin-top、margin-left分别向上、左移动对应尺寸的元素；
1.2 margin-right、margin-bottom不是让目标元素向右、下移动元素，而是让最后的元素拉向目标元素，并覆盖目标元素；
1.3 如果目标元素没有设定宽度，设定margin-left,margin-right使用负值，会增加到目标的实际宽度；

2. 在浮动元素上使用负值margin
2.1 If a negative margin is applied opposite a float, it creates a void leading to the overlapping of content. This is great for liquid layouts where one column has a width of 100% while the other has a definite width, like 100px.

2.2 If both elements are floated left and margin-right:-20px is applied to #mydiv1, #mydiv2 treats #mydiv1 as if it were 20px smaller in width than it actually is (thus, overlapping it). What’s interesting is that the contents of #mydiv1 don’t react at all and continue to retain its current width.
2.3 If the negative margin is equal to the actual width, then it overlaps it entirely. This is because margins, padding, borders, and width add up to the total width of an element. So if a negative margin is equal to the rest of the dimensions then the element’s width effectively becomes 0px.
Demo地址：
http://plnkr.co/edit/S1tbTRPboCSIhUqgAd0W?p=preview
