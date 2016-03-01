# jQuery Notify bar

Please visit [the project page](http://www.whoop.ee/posts/2013/04/05/the-resurrection-of-jquery-notify-bar.html "the project page") for feedback and other details.

Simple plugin (basically it's not a plugin, but widget) to show notify bar (like on Twitter's webpage). It's very simple to use:

## Installation
<pre><code>&gt; bower install jqnotifybar</code></pre>

## Usage

<pre><code>jQuery(function () {
  jQuery.notifyBar({
    html: "Thank you, your settings were updated!",
    delay: 2000,
    animationSpeed: "normal"
  });  
});
</code></pre>

### Usage position at bottom
<pre><code>
jQuery(function () {
  jQuery.notifyBar({
    html: "Hi from below!",
    cssClass: "Appear at bottom",
    position: "bottom"
  });
});
</code></pre>

## Options

<table class="table1">
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><strong>html</strong></td>
    <td>What text will be inside bar. Can be HTML or just text.</td>
    <td>String [optional]</td>
    <td>"Your message here"</td>
  </tr>
  <tr>
    <td><strong>delay</strong></td>
    <td>How long bar will be delayed, doesn't count animation time.</td>
    <td>Integer [optional]</td>
    <td>2000</td>
  </tr>
  <tr>
    <td><strong>animationSpeed</strong></td>
    <td>How long this bar will be slided up and down.</td>
    <td>String | Integer</td>
    <td>"normal"</td>
  </tr>
  <tr>
    <td><strong>jqObject</strong></td>
    <td>Custom jQuery object for notify bar.</td>
    <td>jQuery object [optional]</td>
    <td>null</td>
  </tr>
  <tr>
    <td><strong>cssClass</strong></td>
    <td>You can define own CSS class for Notify bar.
        There are too premade classes "error", "warning" and "success".</td>
    <td>String</td>
    <td>""</td>
  </tr>
  <tr>
    <td><strong>close</strong></td>
    <td>If set to true close button will be displayed.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td><strong>closeText</strong></td>
    <td>Sets the text to close button.</td>
    <td>String</td>
    <td>"Close [X]"</td>
  </tr>
  <tr>
    <td><strong>closeOnClick</strong></td>
    <td>If enabled, user can hide notify bar just by click on it.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td><strong>closeOnOver</strong></td>
    <td>If enabled, user can hide notify bar just by moving mouse cursor on it (suitable for really lazy people).</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
    <tr>
    <td><strong>waitingForClose</strong></td>
    <td>If enabled, notify bar don't close until user presses the close button.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td><strong>onBeforeShow</strong></td>
    <td>Callback on before show.</td>
    <td>function</td>
    <td>null</td>
  </tr>
  <tr>
    <td><strong>onShow</strong></td>
    <td>Callback on show.</td>
    <td>function</td>
    <td>null</td>
  </tr>
  <tr>
    <td><strong>onBeforeHide</strong></td>
    <td>Callback on before hide.</td>
    <td>function</td>
    <td>null</td>
  </tr>
  <tr>
    <td><strong>onHide</strong></td>
    <td>Callback on hide.</td>
    <td>function</td>
    <td>null</td>
  </tr>
  <tr>
    <td><strong>position</strong></td>
    <td>Set the position of notify bar. Possible values are <strong>top</strong>, <strong>bottom</strong>.</td>
    <td>string</td>
    <td>"top"</td>
  </tr>
  
</table>

Please visit [the project page](http://www.whoop.ee/posts/2013-04-05-the-resurrection-of-jquery-notify-bar/ "the project page") for feedback and other details.

##  MIT License

The MIT License (MIT)

Copyright (c) 2009-2014 Dknight

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.