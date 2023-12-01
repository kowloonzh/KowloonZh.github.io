---
title: k8s容器里标准输出的位置
# icon: pen-to-square
# cover: /assets/images/cover1.jpg
date: 2023-11-22
sidebar: false
category:
  - 编程
tag:
  - k8s
---


k8s 中容器的标准输出位置为 
```
/var/log/pods/${podname}/${contained-name}
```

例如：
```

$ cd /var/log/pods/xcloud_xcloud-stack-api-7bd667ccdf-jjjmt_233f05b6-314a-4bde-860e-cbdf4f4d14c0/manager

$ ls -l
total 14768
-rw-r----- 1 root root  4620831 Dec  1 18:47 0.log
-rw-r----- 1 root root 10487096 Dec  1 12:57 0.log.20231201-125747

```