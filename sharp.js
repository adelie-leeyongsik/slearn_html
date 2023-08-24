import fs from "fs";
import path from "path";
import glob from "glob";
import sharp from "sharp";

sharp.cache(false);

const targetQuality = 90;
const targetDir = "dist/images";
const debug = false;

debug && console.log(`👇 Start Sharp(Quality: ${targetQuality})`);

const getExt = (filename) => {
  const ext = path.extname(filename || "").split(".");
  return ext[ext.length - 1];
};

glob(targetDir + "/**/*.+(jpg|jpeg|png)", { nodir: true }, (err, files) => {
  if (err) return console.log(err);
  files.forEach((file) => {
    const ext = getExt(file);
    const sh = sharp(file);
    if (ext === "jpg" || ext === "jpeg") {
      sh.jpeg({ quality: targetQuality });
    } else if (ext === "png") {
      sh.png({ quality: targetQuality });
    }
    sh.toBuffer((err, buffer) => {
      if (err) return console.log(err);
      fs.writeFile(file, buffer, () => {
        debug && console.log(`${file} >>> compressed`);
      });
    });
  });
});
