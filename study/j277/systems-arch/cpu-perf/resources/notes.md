---
layout: study
title: Notes
description: OCR J277 / 1.1 / CPU Performance
---

{% include toc.md %}

CPU performance is influenced by three different factors - clock speed, cache size and number of cores.

---
## Clock speed
The CPU performs one instruction cycle at a time. The instructions are carried out on each tick of the internal clock.

Clock speed is a measure of how many instruction cycles a CPU core can perform in one second. 

### Units
- 1Hz - one cycle per second
- 1kHz - one thousands cycles per second
- 1MHz - one million cycles per second
- 1GHz - one billion cycles per second

---
## Cache size
[Cache](../../cpu-arch/resources/notes.md) is a fast storage location in the CPU storing frequently used instructions and data, making the fetch stage faster.

If there is more cache memory, more data and instructions can be stored for faster fetching, leading to better performance overall.

### Levels of cache

| Level | Price           | Speed          | Capacity       |
| ----- | --------------- | -------------- | -------------- |
| L1    | Expensive       | Fast           | Low            |
| L2    | Cheaper than L1 | Slower than L1 | Higher than L1 |
| L3    | Cheap           | Slow           | High           |

---
## Number of cores
A core is a single processing unit in a CPU which can process instructions at the same time as the other cores. This leads to better performance and multitasking.

However, a program must be written to use the additional CPU cores, or they'll remain unused.