---
title: First stress tests on our NDC aggregation platform
date: 2016-10-18T00:00:00.000Z
post-date: Oct 2016
author: Admin
published: true
img-cover: /img/the-plane-take-off-lights.jpg
img-cover_2x: /img/the-plane-take-off-lights@2x.jpg
img: /img/the-plane-take-off-lights.jpg
category: Technology
layout: post
entry: >-
  We are happy to disclose the results of the first stress tests made on our NDC
  aggregation platform with very satisfactory conclusions for our technical
  scalability expectations.
---

We used a popular stress testing third-party service like [BlazeMeter](http://blazemeter.com/) to put our platform under pressure and first outcomes are really satisfactory. Using a single instance of our **NDC Gateway**, we managed to handle virtually **50K AirShopping requests** (involving multiple providers) during a **20 mins test** while reaching peaks of **53 req/s** with none of them resulting in failure.

This means we could handle easily **2,88MM** requests/day with just a single server node. These numbers make us feel extremely confident on our platform's scalability since it has been built using server-side technologies well known for its incredible scalability capabilities, proven in some World class services like *Whatsapp* and *Google Talk*.

You can [download here the PDF](/img/posts/BlazeMeter-AG-AirShopping-LHR-DME.pdf) for more detailed info of the test.
