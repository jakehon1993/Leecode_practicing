/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0;
    
    // 右移，然後用XAND檢查最低位是否為1
    // ex: 11 => ..001011
    //                              ..001011
    //     L1: i=0, ..001011 & 1  =     XAND   = ..000001  = 1
    //                              ..000001
    //     L2: i=1, ..000101 & 1  =    ...     = ..000001  = 1
    //
    //                              ..000010
    //     L3: i=2, ..000010 & 1  =     XAND   = ..000000  = 0
    //                              ..000001
    //     L4: i=3, ..000001 & 1  =    ...     = ..000001  = 1
    //     L5 ~ Ln = 0
    for(let i = 0; i < 32; i++)
    {
        sum += (n >> i & 1);  
    }
    return sum;
};