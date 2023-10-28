// Ques - Check wether the result is area or perimeter
// in the following function the length and width are given so you have to find out that if l and w are not equal then return the area of perimeter and if l and w are equal then return area of square
// area = a * a
// perimeter = 2(l+w)




const areaOrPerimeter = (l, w) => {
    return console.log(l === w ? l * l : 2 * (l * w))
}

areaOrPerimeter(6, 10)
areaOrPerimeter(20, 20)
areaOrPerimeter(62, 10)