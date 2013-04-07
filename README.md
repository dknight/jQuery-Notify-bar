# jQuery Notify bar

Simple plugin (basically it's not a plugin, but widget) to show notify bar (like on Twitter's webpage). It's very simple to use:

<pre><code>
$(function () {
  $.notifyBar({
    html: "Thank you, your settings were updated!",
    delay: 2000,
    animationSpeed: "normal"
  });  
});
</code></pre>

and to your html page stylesheet:

<pre><code>
<link rel="stylesheet" href="jquery.notifyBar.css">
</code></pre>

## Options

<table border="1">
  <tr>
    <th>Parameter</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>html</td>
    <td>What text will be inside bar, can be HTML</td>
    <td>String [optional]</td>
    <td>"Your message here"</td>
  </tr>
  <tr>
    <td>delay</td>
    <td>How long bar will be delayed, doesn't count animation time.</td>
    <td>Integer [optional]</td>
    <td>2000</td>
  </tr>
  <tr>
    <td>animationSpeed</td>
    <td>How long this bar will be slided up and down</td>
    <td>String | Integer [optional]</td>
    <td>"normal"</td>
  </tr>
  <tr>
    <td>jqObject</td>
    <td>Own jquery object for notify bar</td>
    <td>jQuery object [optional]</td>
    <td>null</td>
  </tr>
  <tr>
    <td>cssClass</td>
    <td>You can set own CSS class for 'Notify bar'. There is too premade clasess "error" and "success"</td>
    <td>String</td>
    <td>""</td>
  </tr>
  <tr>
    <td>close</td>
    <td>If set to true close button will be displayed</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>closeText</td>
    <td>Sets the text to close link.</td>
    <td>String</td>
    <td>Close [X]</td>
  </tr>
  <tr>
    <td>closeOnClick</td>
    <td>If enabled, user can hide notify bar just by click on it.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>closeOnOver</td>
    <td>If enabled, user can hide notify bar just by moving mouse cursor on it (suitable for really lazy people).</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
</table>

Please visit [the project page](http://www.whoop.ee/posts/2013-04-05-resurrection-of-jquery-notify-bar/ "the project page") for feedback and other details.
Isn't ready yet, but soon will be.

