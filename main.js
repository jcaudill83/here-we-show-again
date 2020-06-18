// Marshel Senduk
// Sulaimon
// Benjamin Scott
// Elizabeth Johns

let kataList = document.createElement('div')
document.body.append(kataList)
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]; 

// Kata 1

let kata1 = document.createElement('div')
let kata1Heading = document.createElement('h3')
kata1Heading.append('Kata 1')
kata1.append(kata1Heading)
kataList.append(kata1)

for (let index = 1; index <=20; index ++) {
    if (index === 20) {
        kata1.append(index)
    }else{
        kata1.append(index + ',')
    }
}


// Kata 2
let kata2 = document.createElement('div')
let kata2Heading =document.createElement('h3')
kata2Heading.append('Kata 2')
kata2.append(kata2Heading)
kataList.append(kata2)
for (let index = 2; index <= 20; index += 2) {
    if (index === 20){
        kata2.append(index)
    } else {
        kata2.append(index + ',')
    }
}


// Kata 3
let kata3 = document.createElement('div')
let kata3Heading =document.createElement('h3')
kata3Heading.append('Kata 3')
kata3.append(kata3Heading)
kataList.append(kata3)
for (let index = 1; index <= 20; index += 2) {
    if (index === 20) {
        kata3.append(index)
    } else {
        kata3.append(index + ',')
    }
}

// Kata 4
let kata4 = document.createElement('div')
let kata4Heading = document.createElement('h3')
kata4Heading.append('Kata 4')
kata4.append(kata4Heading)
kataList.append(kata4)
for (let index = 5; index <= 100; index += 5) {
    if (index === 100) {
        kata4.append(index)
    } else {
        kata4.append(index + ',')
    }
}


// Kata 5
let kata5 = document.createElement('div')
let kata5Heading = document.createElement('h3')
kata5Heading.append('Kata 5')
kata5.append(kata5Heading)
kataList.append(kata5)
for (let index = 1; index <= 100; index ++) {
    const indexIsPerfectSquare = Number.isInteger(Math.sqrt(index))
    if (indexIsPerfectSquare && index != 100) {
        kata5.append(index + ',')
    } else if(indexIsPerfectSquare) {
        kata5.append(index)
    }
}



// Kata 6
let kata6 = document.createElement('div')
let kata6Heading = document.createElement('h3')
kata6Heading.append('Kata 6')
kata6.append(kata6Heading)
kataList.append(kata6)
for (let index = 20; index >= 1; index --) {
    if (index === 1) {
        kata6.append(index)
    }else{
        kata6.append(index + ',')
    }
}

// Kata 7
let kata7 = document.createElement('div')
let kata7Heading = document.createElement('h3')
kata7Heading.append('Kata 7')
kata7.append(kata7Heading)
kataList.append(kata7)
for (let index = 20; index >= 2; index -= 2) {
    if (index === 2){
        kata7.append(index)
    } else {
        kata7.append(index + ',')
    }
}


// // Kata 8
let kata8 = document.createElement('div')
let kata8Heading = document.createElement('h3')
kata8Heading.append('Kata 8')
kata8.append(kata8Heading)
kataList.append(kata8)
for (let index = 19; index >= 1; index -= 2) {
    if (index === 1) {
        kata8.append(index)
    } else {
        kata8.append(index + ',')
    }
}

// // Kata 9
let kata9 = document.createElement('div')
let kata9Heading = document.createElement('h3')
kata9Heading.append('Kata 9')
kata9.append(kata9Heading)
kataList.append(kata9)
for (let index = 100; index >= 5; index -= 5) {
    if (index === 5) {
        kata9.append(index)
    } else {
        kata9.append(index + ',')
    }
} 


// // Kata 10
let kata10 = document.createElement('div')
let kata10Heading = document.createElement('h3')
kata10Heading.append('Kata 10')
kata10.append(kata10Heading)
kataList.append(kata10)
for (let index = 100; index >= 1; index --) {
    const indexIsPerfectSquare = Number.isInteger(Math.sqrt(index))
    if (indexIsPerfectSquare && index != 1) {
        kata10.append(index + ',')
    } else if(indexIsPerfectSquare) {
        kata10.append(index)
    }
}


// Kata 11
let kata11 = document.createElement('div')
let kata11Heading =document.createElement('h3')
kata11Heading.append('Kata 11')
kata11.append(kata11Heading)
kataList.append(kata11)
for (let index = 0; index < sampleArray.length; index ++) {
    kata11.append(sampleArray[index] + ' ')
}

// Kata 12
let kata12 = document.createElement('div')
let kata12Heading =document.createElement('h3')
kata12Heading.append('Kata 12')
kata12.append(kata12Heading)
kataList.append(kata12)
for (index = 0; index < sampleArray.length; index ++) {
    if (sampleArray[index] % 2 === 0){
        kata12.append(sampleArray[index] + ' ')
    }
}
// Kata 13
let kata13 = document.createElement('div')
let kata13Heading =document.createElement('h3')
kata13Heading.append('Kata 13')
kata13.append(kata13Heading)
kataList.append(kata13)
for (let index = 0; index < sampleArray.length; index ++) {
    if (sampleArray[index] % 2 != 0) {
        kata13.append(sampleArray[index] + ' ')
    }
}

// Kata 14
let kata14 = document.createElement('div')
let kata14Heading =document.createElement('h3')
kata14Heading.append('Kata 14')
kata14.append(kata14Heading)
kataList.append(kata14)
for (let index = 0; index < sampleArray.length; index ++) {
    kata14.append((sampleArray[index] * sampleArray[index]) + ' ')
}
// Kata 15
let kata15 = document.createElement('div')
let kata15Heading =document.createElement('h3')
kata15Heading.append('Kata 15')
kata15.append(kata15Heading)
kataList.append(kata15)
let result15 = 0
for (let index = 1; index <= 20; index ++){
    result15 += index
}
kata15.append(result15)


// // Kata 16
let kata16 = document.createElement('div')
let kata16Heading =document.createElement('h3')
kata16Heading.append('Kata 16')
kata16.append(kata16Heading)
kataList.append(kata16)
let result16 = 0
for (let index = 0; index < sampleArray.length; index ++) {
    result16 += sampleArray[index]
}
kata16.append(result16)


// Kata 17
let kata17 = document.createElement('div')
let kata17Heading =document.createElement('h3')
kata17Heading.append('Kata 17')
kata17.append(kata17Heading)
kataList.append(kata17)

let smallestElement = sampleArray[0]
for (let index = 0; index < sampleArray.length; index ++) {
    if (smallestElement > sampleArray[index]) {
        smallestElement = sampleArray[index]
    }
}
kata17.append(smallestElement)
// Kata 18
let kata18 = document.createElement('div')
let kata18Heading =document.createElement('h3')
kata18Heading .append('Kata 18')
kata18.append(kata18Heading)
kataList.append(kata18)
let largestElement = sampleArray[0]
for (let index = 0; index <sampleArray.length; index ++) {
    if(largestElement < sampleArray[index]) {
        largestElement = sampleArray[index]
    }
}
kata18.append(largestElement)