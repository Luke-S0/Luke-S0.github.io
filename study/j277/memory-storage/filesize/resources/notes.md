---
layout: study
title: Notes
description: OCR J277 / 1.2 / File size calculations
---

{% include toc.md %}

## Determining file size
To determine the file size, you should substitute the given values into the formula, calculate and then convert to the requested unit.

---

## Image file size
- A digital bitmap image is made up of pixels.
- Each pixel stores a single colour.

- The resolution of an image is the width * height.
- The colour depth of an image is the number of bits used to represent the colour of each pixel.

### Formula
`image file size (bits) = width (px) * height (px) * colour depth`

### Examples
What is the file size of a 800x600 desktop wallpaper with a 24-bit colour depth? Give your answer in MB.

<details>

<summary>Reveal answer</summary>

<pre>

image file size (bits) = width (px) * height (px) * colour depth

image file size (bits) = 800 * 600 * 24

image file size (bits) = 11 520 000

11 520 000 / 8 = 1 440 000 bytes

1 440 000 / 1000 = 1440 KB

1440 / 1000 = 1.44 MB

</pre>

</details>

John wants to send a photo of the mountains that he took to his friend. The platform only allows images up to 5 MB in size.

If the resolution of the image is 1920x1080 and the colour depth is 24-bits, will John be able to upload this image?

<details>

<summary>Reveal answer</summary>

<pre>

image file size (bits) = width (px) * height (px) * colour depth

image file size (bits) = 1920 * 1080 * 24

image file size (bits) = 49 766 400

49 766 400 / 8 = 6 220 800 bytes

6 220 800 / 1000 = 6220.8 KB

6220.8 / 1000 = 6.2208 MB

</pre>

<p>No, he will not be able to upload the image.</p>

</details>

---
## Sound file size
- Sound is analogue and must be stored in a digital format by sampling at regular intervals.

- The sample rate is the number of samples taken per second (Hz)
- The bit depth is the number of bits used to store each sample
- The duration is the length of the sound in seconds.

### Formula
`sound file size (bits) = sample rate * duration (s) * bit depth`

### Example
What is the file size of a 12 second 16-bit sound file with a sample rate of 44100Hz? Give your answer in KB.

<details>

<summary>Reveal answer</summary>

<pre>

sound file size (bits) = sample rate * duration (s) * bit depth
sound file size = 44100Hz * 10s * 16 bits
sound file size = 7056000 bits

7056000 / 8 = 882000 bytes
882000 / 1000 = 882 KB

</pre>

</details>

---
## Text file size
- Text is stored using binary codes from a character set (e.g. ASCII or Unicode)
- Each character uses a fixed number of bits.
- File size depends on the number of characters and the bits used to represent each character.

> This only applies to plain text files (`.txt`), not formatted text files (e.g. `.docx`)

### Formula
`text file size (bits) = number of characters * bits per character`

### Example
What is the file size of a text file with 2000 characters, represented with ASCII (8-bit)? Give your answer in KB.

<details>

<summary>Reveal answer</summary>

<pre>

text file size (bits) = bits per character * number of characters

text file size (bits) = 8 * 2000
text file size (bits) = 16 000 bits

16 000 bits / 8 = 2000 bytes
2000 / 1000 = 2 KB

</pre>

</details>