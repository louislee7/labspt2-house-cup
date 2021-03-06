 const dummyData = {
  years:[
   { label: "2015", value: 0 },
   { label: "2016", value: 1 },
   { label: "2017", value: 2 },
   { label: "2018", value: 3 },
   { label: "2019", value: 4 },
   
 ],
 
data : {
  2015 : [
            ['x', 'v1', 'v2', 'v3', 'v4'],
            [0, 0,  0, 0,  0],
            [1, 10, 5,  4,  6],
            [2, 23, 15,  20,  26],
            [4, 10, 6,   22,  24],
            [5,  5, 10,  32,  20],
            [6, 12, 25,  44,  12],
            [7, 15, 45,  50,  10],
            [8, 18, 35,  20,  8], 
            [9, 22, 30,  38,   5],
            [10, 32, 40,  12,  4],
            [11, 42, 45,  15,  14],
            [12, 28, 32,  17,  44],
          ],
  2016 : [
            ['x', 'H1', 'H2', 'H3', 'H4'],
            [0, 0,  0, 0,  0],
            [1, 5, 8,  4,  6],
            [2, 10, 11, 8,  26],
            [4, 14, 14, 12,  24],
            [5, 19, 18,  12,  20],
            [6, 25, 21,  19,  12],
            [7, 30, 25,  23,  10],
            [8, 35, 28,  27,  8], 
            [9, 40, 32,  31,   5],
            [10,45, 36,  35,  4],
            [11,50, 41,  39,  14],
            [12,60, 46,  43,  44],
    ],

  2017 : [
        ['x', 'H1', 'H2', 'H3', 'H4'],
        [0, 0,  0, 0,  0],
        [1, 1, 5,  14,  16],
        [2, 3, 10, 10,  20],
        [4, 5, 6,  12,  24],
        [5, 7, 12, 22,  26],
        [6, 12, 5, 24,  28],
        [7, 18, 5, 30,  32],
        [8, 25, 15,30,  36], 
        [9, 30, 20, 40,  40],
        
    ],

  2018 : [
          ['x', 'H1', 'H2', 'H3', 'H4'],
          [0, 0,  0, 0,  0],
          [1, 2,  4,  3,  6],
          [2, 3, 6,  6,   10],
          [4, 4, 8,   9,  14],
          [5, 5, 10,  12,  18],
          [6,  6, 12,  15, 22],
          [7,  7, 14,  18, 26],
          [8, 8, 16,  21,  30], 
          [9, 9, 18,  24,  34],
          [10, 10, 20, 27, 38],
          [11, 11, 22, 30, 42],
          [12, 12, 24, 33, 46],
      ],

2019 : [
        ['x', 'H1', 'H2', 'H3', 'H4'],
        [0, 0,  0, 0,  0],
        [1, 10, 5,  4,  6],
        [2, 23, 15,  20,  26],
        [4, 10, 6,   22,  24],
        [5,  5, 10,  12,  20],
        [6, 12, 25,  44,  12],
        [7, 15, 45,  40,  10],
        [8, 18, 35,  20,  8], 
        [9, 22, 10,  38,   5],
        [10, 32, 40,  12,  4],
        [11, 42, 45,  15,  14],
        [9, 8, 32,  7,  44],
      ]

},

options:{
   hAxis: {
     title: 'Time in Months' ,
   },
   vAxis: {
     title: 'Points',
   },
   series: {
     1: { curveType: 'function' },
   },
 }
}

export default dummyData;

