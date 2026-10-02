---
layout: study
title: Notes
description: AQA 8525 / 3.4 / CPU Architecture
---

{% include toc.md %}

## Fetch-Execute Cycle
The CPU processes and executes instructions from the RAM in order for a computer to function. It carries out the fetch-execute cycle.
- The instruction is fetched from the RAM.
- The instruction is decoded
- The instruction is carried out/executed by the CPU.

---
## CPU components
There are five main CPU components to know about for AQA 8525.
- Control unit - This controls the flow of data, decodes instructions and coordinates the FDE cycle.
- Arithmetic and logic unit - This solves arithmetic problems, comparisons and boolean logic.
- Cache - Frequently used instructions and data are stored here to make it quicker to fetch. The cache is faster than the RAM.
- Registers - These are small and fast memory locations in the CPU.
- Bus

---
## CPU performance
CPU performance is influenced by three different factors - clock speed, cache size and number of cores.

### Clock speed
The CPU performs one instruction cycle at a time. The instructions are carried out on each tick of the internal clock.

Clock speed is a measure of how many instruction cycles a CPU core can perform in one second. 

#### Units
- 1Hz - one cycle per second
- 1kHz - one thousands cycles per second
- 1MHz - one million cycles per second
- 1GHz - one billion cycles per second

### Cache size
[Cache](../../cpu-arch/resources/notes.md) is a fast storage location in the CPU storing frequently used instructions and data, making the fetch stage faster.

If there is more cache memory, more data and instructions can be stored for faster fetching, leading to better performance overall.

#### Levels of cache

| Level | Price           | Speed          | Capacity       |
| ----- | --------------- | -------------- | -------------- |
| L1    | Expensive       | Fast           | Low            |
| L2    | Cheaper than L1 | Slower than L1 | Higher than L1 |
| L3    | Cheap           | Slow           | High           |

### Number of cores
A core is a single processing unit in a CPU which can process instructions at the same time as the other cores. This leads to better performance and multitasking.

However, a program must be written to use the additional CPU cores, or they'll remain unused.