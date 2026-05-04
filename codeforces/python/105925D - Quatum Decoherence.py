# 105925D - Quantum Decoherence (https://codeforces.com/gym/105925/problem/D)

"""
The SBC (Brazilian Computer Society) is developing various models of architectures for quantum computers, with the goal of making them accessible to everyone in the future. One of the main challenges faced by the development teams is quantum decoherence, which occurs when a qubit in superposition (simultaneously representing states 0 and 1) collapses to 0 or 1 due to environmental interference.

For each model developed, the rate of quantum decoherence will be analyzed. To do this, the qubits will be observed in an isolated state and under normal temperature and pressure conditions. The rate of quantum decoherence is the ratio between the number of qubits that collapsed under normal temperature and pressure conditions and the number of qubits that were in superposition in the isolated state.

Since there are several models, you have been asked to develop a program that calculates this rate. After all, you need extracurricular hours to graduate, right?!

Input
The first line contains an integer N(10≤N≤105) indicating the number of qubits in the computer. The next two lines contain the strings S (isolated state) and T (normal conditions), respectively, each of size N, composed of the characters {0,1,∗}, where ∗ indicates a qubit in superposition.

It is guaranteed that:

- At least one qubit is in superposition in S;
- Every qubit not in superposition in S remains identical in T;

Output
The output should contain the rate of quantum decoherence in decimal form, with exactly two decimal places.
"""

elements = input().strip()

isolated_string = str(input().strip())
normal_string = str(input().strip())

isolated_sum, decoherence_normal = 0, 0

for index, element in enumerate(isolated_string):
    if element == '*':
        isolated_sum += 1

        if normal_string[index] != '*':
            decoherence_normal += 1

answer = str(round(decoherence_normal/isolated_sum, 2))

complement = 2
has_point = False
for element in answer:
    if (has_point == True):
        complement -= 1
    if (element == '.'):
        has_point = True

for _ in range(complement):
    answer = answer + '0'

print(answer)