// 在數組中找出最大子數組，ex: 指定範围裏找出最大利潤

// 分折問題，一般情況下，給定數組A[low...high]，可將A區分成以下3種規模更小的情況：

// 左數組：     A[low...mid]             low <= i <= j <= mid
// 右數組：     A[mid + 1...high]        mid < i <= j <= high
// 跨越中點：   A[i...mid, mid + 1...j]             low <= i <= mid < j <= high

// 分析左、右數組，又可再次區分同上的3種情況（當視左、右數組為單獨數組時，它們仍然是`找最大子數組`問題），最後，找到跨越中點的子數組，再比較三者的（數組總和）最大值

// 跨越中點最大子數組
function findMaxCrossingSubarray(arr, low, mid, high) {
    let leftSum = 0;
    let leftIndex = 0;
    let sum = 0;
    for (let i = mid; i >= low; i--) {
        sum += arr[i];
        if (sum > leftSum) {
            leftSum = sum;
            leftIndex = i;
        }
    }

    let rightSum = 0;
    let rightIndex = 0;
    sum = 0;
    for (let i = mid + 1; i <= high; i++) {
        sum += arr[i];
        if (sum > rightSum) {
            rightSum = sum;
            rightIndex = i;
        }
    }

    return { crossLowIndex: leftIndex, crossHighIndex: rightIndex, crossSum: leftSum + rightSum };
}

// 最大子數組
function findMaxSubarray(arr, low, high) {
    if (high === low) {
        return { low, high, sum: arr[low] };
    } else {
        const mid = Math.floor((low + high) / 2);
        const { low: leftLowIndex, high: leftHighIndex, sum: leftSum } = findMaxSubarray(arr, low, mid);
        const { low: rightLowIndex, high: rightHighIndex, sum: rightSum } = findMaxSubarray(arr, mid + 1, high);
        const { crossLowIndex, crossHighIndex, crossSum } = findMaxCrossingSubarray(arr, low, mid, high);

        if (leftSum >= rightSum && leftSum >= crossSum) {
            return { left: leftLowIndex, right: leftHighIndex, sum: leftSum };
        } else if (rightSum >= leftSum && rightSum >= crossSum) {
            return { left: rightLowIndex, right: rightHighIndex, sum: rightSum };
        } else { 
            return { left: crossLowIndex, right: crossHighIndex, sum: crossSum };
        }
    }
}

console.log(findMaxSubarray([-2, -4, -3, 5, 1, -2], 0, 5));