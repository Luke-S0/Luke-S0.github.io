---
layout: study
title: Notes
description: OCR J277 / 2.1 / Flowcharts
---

{% include toc.md %}

## Flowcharts

A flowchart is a visual representation of the steps that an algorithm completes. Different shapes are used to indicate the type of step within the algorithm.

### Shapes

<img src="/assets/images/flowcharts-shapes.png">

- INPUT / OUTPUT - Used to show when information is entered or displayed on screen.
- PROCESS - Used for calculations or instructions.
- SELECTION - Used for making decisions where a condition involving a variable is checked.
- - There should be two branches, one labelled True and the other labelled False.
- ITERATION - Although there is no block for iteration, you can use an arrow to show when a section of the algorithm repeats. The arrow should connect to a previous step.

### Tips for drawing flowcharts
1. A flowchart must start with a START terminal and end with a STOP terminal.
2. Arrows should be used to show the direction of the algorithm, NOT lines.
3. Typically, a flowchart flows from top to bottom, not left to right.

---
## Example

To create an account, the user needs to be 18+. Draw a flowchart showing an algorithm that takes the user's age and outputs whether they can enter or not.

<details>

<summary>Reveal answer</summary>

<img src="/assets/images/flowchart-example-1.png">

</details>

This algorithm can now be represented in Python, for example. An advantage of flowcharts is that any developer can read them and implement them in their programming language.

```
age = int(input("Enter age"))

if age >= 18:
    print("You can enter")
else:
    print("You can't enter")
```