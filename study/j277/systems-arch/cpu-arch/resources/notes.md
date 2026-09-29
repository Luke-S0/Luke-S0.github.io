---
layout: study
title: Notes
description: OCR J277 / 1.1 / CPU Architecture
---


## Fetch-Execute Cycle
The CPU processes and executes instructions from the RAM in order for a computer to function. It carries out the fetch-execute cycle.
- The instruction is fetched from the RAM.
- The instruction is decoded
- The instruction is carried out/executed by the CPU.

---
## CPU components and Von Neumann architecture
The Von Neumann architecture is a system architecture design where instructions and data share the same memory space. There are four main CPU components to know about for OCR J277.
- Control unit - This controls the flow of data, decodes instructions and coordinates the FDE cycle.
- Arithmetic and logic unit - This solves arithmetic problems, comparisons and boolean logic.
- Cache - Frequently used instructions and data are stored here to make it quicker to fetch. The cache is faster than the RAM.
- Registers - These are small and fast memory locations in the CPU.

---
## Registers
There are four CPU registers you need to know about for OCR J277.
- Program counter - This stores the address of the next instruction.
- Memory address register (MAR) - This stores the address about to be used by the CPU, which may point to data or an instruction.
- Memory data register (MDR) - This stores the data or instruction that has been fetched or is about to be written.
- Accumulator - This stores the results of mathematical/logical problems solved in the ALU.

