let Array=[
    {sname:"ABC1", sage:22, sdept:"ME", sid:1},
    {sname:"ABC2", sage:22, sdept:"Civil", sid:2},
    {sname:"ABC3", sage:22, sdept:"EEE", sid:3},
    {sname:"ABC4", sage:22, sdept:"CSE", sid:4},
    {sname:"ABC5", sage:22, sdept:"ISE", sid:5},
    {sname:"ABC6", sage:22, sdept:"ECE", sid:6},
    {sname:"ABC7", sage:22, sid:7},
    {sname:"ABC8", sage:22, sid:8},
    {sname:"ABC9", sage:"Twenty Two", sid:9}
];

//! For defaultProps, no info should be present in the elements
//? For ex, ABC7, 8 and 9 has no sdept
//! Even if empty sdept is given, defaultProps doesn't work


export default Array;