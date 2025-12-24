// 7B - Memory Manager (https://codeforces.com/contest/7/problem/B)

/*
    There is little time left before the release of the first national operating system BerlOS. Some of its components are not finished yet — the memory manager is among them. According to the developers' plan, in the first release the memory manager will be very simple and rectilinear. It will support three operations:

    alloc n — to allocate n bytes of the memory and return the allocated block's identifier x;
    erase x — to erase the block with the identifier x;
    defragment — to defragment the free memory, bringing all the blocks as close to the beginning of the memory as possible and preserving their respective order;
    The memory model in this case is very simple. It is a sequence of m bytes, numbered for convenience from the first to the m-th.

    The first operation alloc n takes as the only parameter the size of the memory block that is to be allocated. While processing this operation, a free block of n successive bytes is being allocated in the memory. If the amount of such blocks is more than one, the block closest to the beginning of the memory (i.e. to the first byte) is prefered. All these bytes are marked as not free, and the memory manager returns a 32-bit integer numerical token that is the identifier of this block. If it is impossible to allocate a free block of this size, the function returns NULL.

    The second operation erase x takes as its parameter the identifier of some block. This operation frees the system memory, marking the bytes of this block as free for further use. In the case when this identifier does not point to the previously allocated block, which has not been erased yet, the function returns ILLEGAL_ERASE_ARGUMENT.

    The last operation defragment does not have any arguments and simply brings the occupied memory sections closer to the beginning of the memory without changing their respective order.

    In the current implementation you are to use successive integers, starting with 1, as identifiers. Each successful alloc operation procession should return following number. Unsuccessful alloc operations do not affect numeration.

    You are to write the implementation of the memory manager. You should output the returned value for each alloc command. You should also output ILLEGAL_ERASE_ARGUMENT for all the failed erase commands.

    Input
    The first line of the input data contains two positive integers t and m (1 ≤ t ≤ 100;1 ≤ m ≤ 100), where t — the amount of operations given to the memory manager for processing, and m — the available memory size in bytes. Then there follow t lines where the operations themselves are given. The first operation is alloc n (1 ≤ n ≤ 100), where n is an integer. The second one is erase x, where x is an arbitrary 32-bit integer numerical token. The third operation is defragment.

    Output
    Output the sequence of lines. Each line should contain either the result of alloc operation procession , or ILLEGAL_ERASE_ARGUMENT as a result of failed erase operation procession. Output lines should go in the same order in which the operations are processed. Successful procession of alloc operation should return integers, starting with 1, as the identifiers of the allocated blocks.
*/

/* Common Template Starts */

process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
 
process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });
 
    main();
});
 
function readline() {
    return inputString[currentLine++];
}
/* Common Template Ends */

function useMemory (bytes, counter, memory) {
    for (let i = counter - bytes + 1; i <= counter; i++) {
        memory[i] = 1;
    }
    return;
}

function useMemoryOrder(alloc_memory, alloc_counter, counter, bytes) {
    // índice inicial, bytes, parametro (elemento)
    for (let i = 0; i < alloc_memory.length; i++) {
        if (counter - bytes + 1 < alloc_memory[i][0]) {
            alloc_memory.splice(i, 0, [counter - bytes + 1, bytes, alloc_counter]);
            return;
        }
    }
    alloc_memory.push([counter - bytes + 1, bytes, alloc_counter]);
}

function freeMemory (erase_data, memory, alloc_memory) {
    let clean_elements;
    for (let i = 0; i < erase_data; i++) {
        
        if (erase_data == alloc_memory[i][2]) {
            clean_elements = [alloc_memory[i][0], alloc_memory[i][1]];
            break;
        }
    }

    for (let i = clean_elements[0]; i <= clean_elements[0] + clean_elements[1]- 1; i++) {
        memory[i] = 0;
    }
    
    return;
}

function freeMemoryOrder(erase_data, alloc_memory) {

    let erase_data_index;
    for (let i = 0; i < alloc_memory.length; i++) {
        if (erase_data == alloc_memory[i][2]) { 
            erase_data_index = i;
            break;
        }
    }

    alloc_memory.splice(Number(erase_data_index), 1);  
}

function moveMemory (memory, counter, data_lenght) {
    for (let i = 1; i <= data_lenght; i++) {
        if (counter > 0) {
            memory[i] = 1; 
            counter--;
        } else {
            memory[i] = 0;
        }
    }
    return memory;
}

function moveMemoryOrder (alloc_memory) {
    let [new_alloc_memory, counter] = [[], 1];

    for (let i = 0; i < alloc_memory.length; i++) {
        new_alloc_memory.push([counter, alloc_memory[i][1], alloc_memory[i][2]]);
        counter += alloc_memory[i][1];
    }
    return [new_alloc_memory, counter - 1];
}


function main() {
    // t: Operações (loop) / m: Quantidade de bytes, começa no 1 até o m
    let data = readline().split(' ').map((element) => Number(element));

    let memory = {};
    for (let i = 1; i < data[1] + 1; i++) {
        memory[i] = 0;
    };

    // índice inicial, bytes, parametro (elemento)
    let alloc_memory = [];
    let alloc_counter = 0;

    // let teste = ['alloc 5', 'alloc 3', 'erase 1', 'alloc 6', 'defragment', 'alloc 6'];
    for(let i = 0; i < data[0]; i++) {
        let operation = readline().split(' ');

        if (operation[0] === 'alloc') {
            let [bytes, allowed_space, counter] = [Number(operation[1]), 0, 1];

            while (true) {
                if (counter > data[1]) {
                    console.log('NULL');
                    break;
                }

                if (memory[counter] === 0) {
                    allowed_space++;
                } else {
                    allowed_space = 0;
                }

                if (allowed_space === bytes) { 
                    alloc_counter++;
                    useMemory (bytes, counter, memory);
                    useMemoryOrder (alloc_memory, alloc_counter, counter, bytes);
                    console.log(alloc_counter);
                    break;
                };
                counter++;
            }

        } else if (operation[0] === 'erase') {
            let erase_data = operation[1];
            let value_on_list;
            
            for (let i = 0; i < alloc_memory.length; i++) {
                if (erase_data == alloc_memory[i][2]) {
                    value_on_list = true;
                    break;
                }
            } 

            if (value_on_list) {
                freeMemory(erase_data, memory, alloc_memory);
                freeMemoryOrder(erase_data, alloc_memory);
            } else {    
                console.log('ILLEGAL_ERASE_ARGUMENT');
            }
        } else {
            let counter;
            [alloc_memory, counter] = moveMemoryOrder(alloc_memory);
            memory = moveMemory (memory, counter, data[1]);
        }
    }
}