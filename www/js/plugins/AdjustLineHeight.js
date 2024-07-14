alias_Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function (text, x, y, maxWidth, lineHeight, align) {
    y += -5;
    alias_Bitmap_drawText.call(this, text, x, y, maxWidth, lineHeight, align);
};
