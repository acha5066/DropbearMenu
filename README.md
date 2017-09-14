# DropbearMenu
A simple Javascript Dropdown menu

![Image of a Dropbear](https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Dropbear.jpg/1200px-Dropbear.jpg)

## Installation

```bash

npm install dropbear --save

```

## Usage

Simply pass an options object to Dropbear's construct method. The $selection property can be either a jQuery object
or a regular DOM element.

```javascript

var options = {
    $selection: $('#some-selection'),
    breakpoint: 768,
    toggleText: 'Menu',
    toggleElement: 'span'
};
DropBear.construct(options);

```
