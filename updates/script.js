let viewport_width = window.innerWidth;
let target_px = 24; // Target pixel width for the view

console.log("Viewport width: " + viewport_width + "px");
console.log("Target pixel width: " + target_px + "px");

let view_width = (target_px / viewport_width) * 100
console.log("View width: " + view_width.toFixed(2) + "vw");

let font_size = 42; // Default font size in pixels
let line_height = 63; // Default line height in pixels
let unitless_line_height = line_height / font_size
console.log("Unitless line height: " + unitless_line_height.toFixed(2));