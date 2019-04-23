/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

// have C++
var cloneGraph = function(node) {
    function clone (nextNode, visited) {
        if (!nextNode) {
            return null;
        }
        
        // simulate hash_map finding function 
        let hadVisit = false;
        visited.some(vn => {
            if (vn.val === nextNode.val) {
                hadVisit = vn;
            }
            return hadVisit;
        });
        // if visited[] contained the same node, return this node directly
        if (hadVisit) {
            return hadVisit;
        }
        // end of simulate
        
        // this is the key, we need to create a new Node with value, but leave neighbors empty, 
        // because if we put nextNode.neighbors inside the new Node() directly, the neighbors of this new Node() won't be the copied value but reference.
        const cloneNode = new Node(nextNode.val, []);
        visited.push(cloneNode);
        nextNode.neighbors.forEach(neighbors => {
            cloneNode.neighbors.push(clone(neighbors, visited));
        });
        return cloneNode;
    }
    
    // the idea of visited[] is to simulate hash_map ventor that other language provided but javascript have not.
    // we use native array[] instead of Set()
    const visited = [];
    return clone(node, visited);
};