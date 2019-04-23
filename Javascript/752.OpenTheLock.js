/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
// 當前步（如0000）走下一步共有7種選擇（9000，0100，0900，0010，0090，0001，0009），如取9000作下一步，則
// （因為BFS搜索一般從指定方向開始（如左方），因此9000的由最左位9開始變換，則 9 -> 8）
// 9000的下一步有7種選擇（8000，9100，9900，9010，9090，9001，9009），如取9100作下一步（此時step = 1)，則
// 9100的下一步有7種選擇（8100，8000，8200，9110，9190，9101，9109），此時step = 2，假如目標在內（如9110）則反回step

// 為避免走重覆的路，需要記錄每一步(存入visited[])，當visited[]存在當前要走的步，則不進行操作
// 而每一步所產生下一步，記錄為未來要走的路（存入future[]），當visited[]存在當前要走的步，則不進行操作（因為當前步及所有下一步都已被考慮）

// 而deadends[]的性質與走過的重覆的路相同，我們不需要對deadends[]裏的步數計算所有下一步，所以可存入visited[]
var openLock = function(deadends, target) {
    
    // 走過的路徑
    const visited = new Set();
    // 將要走的路徑
    const future = [];
    
    // 將不能走的路徑視為走過的路徑
    deadends.forEach(location => visited.add(location));
    
    if (visited.has("0000")) {
        return -1;
    }
    
    // 初始化
    visited.add("0000");
    future.push("0000");
    let step = 0;
    
    // 當還有要走的路
    while(future.length) {
        const newLen = future.length; // 每次路長都會改變
        for (let i = 0; i < newLen; i++) {
            // 每次將第1個要走的路徑取出
            // 將隊首取出，然後删除隊首，減小路長
            // 如用 const location = future[i]; 取代下列2行，則future路徑保留了大量已走過的路，浪費時間
            const location = future[0];
            future.shift();
            
            // 當隊首（當前要走的路） ＝＝＝ 目標路徑
            if (location === target) {
                return step;
            }
            for (let i = 0; i < 4; i++) {
                // BFS（廣度優先搜索）思想：把與當前結點銜接的結點進行[自定義操作］，使之下一步搜索時可拫據該操作的結果再進行操作
                // 把當前路徑的第i位數字n分別計算＋/- 1步，如果n = 0，則使 n + 1 = 1及n - 1 = 9
                // 如n = 0，i = 1, location = 0000，則
                // reduceOne = 9
                // addOne = 1
                const reduceOne = (parseInt(location[i], 10) -1 + 10) % 10;
                const addOne = (parseInt(location[i], 10) + 1 + 10) % 10;
                
                // 把計算後的第i位數字放回原位，
                // 如n = 0，i = 1, location = 0000，reduceOne = 9，addOne = 1，則
                // step1 = 0100
                // step2 = 0900
                // 至此，0000的下一步可以是0100或0900
                // 當然，經過i由0至4的結果，0000的下一步包括：
                // [9000, 0100, 0900, 0010, 0090, 0001, 0009]
                const step1 = location.substr(0, i) + reduceOne.toString() + location.substr(i + 1, 3);
                const step2 = location.substr(0, i) + addOne.toString() + location.substr(i + 1, 3);
                
                // 把這些結果放入將要走的路經，同時，因為最後我們必定走完所有將要走的路，代表要走的路會成為已走過的路
                if (!visited.has(step1)) {
                    visited.add(step1);
                    future.push(step1);
                }
                if (!visited.has(step2)) {
                    visited.add(step2);
                    future.push(step2);
                }
            }
        }
        // 完成以上循環後，我們才走了一步
        step++;
    }
    
    // 所有步都走完仍沒有解
    return -1;
    
};