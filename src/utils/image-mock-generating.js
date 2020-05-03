export default (imageFromQuery, imgCount) => {
  const images = []
  for (let i = 0; i < imgCount; i++) {
    images.push(imageFromQuery.file.childImageSharp)
  }
  return images
}
