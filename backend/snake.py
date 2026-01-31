import random

class node:
    def __init__(self, row, col):
            self.row = row
            self.col = col
            self.next = None
            self.prev = None


class snake:

    def __init__(self):
        self.reset()


    def eatApple(self):
        current = self.tail
        self.addApple()
        
        newNode = node(current.row, current.col)
        self.tail.next = newNode
        newNode.prev = self.tail
        
        self.tail = newNode
        
    def hasWon(self):
        number = 0
        for x in self.grid:
            for y in x:
                if(y == 0):
                    number += 1
        if(number == 0):
            self.won = True
            return True
        else:
            return False
        
    def hasLost(self, row, col):
        if(self.grid[row][col] == "snake"):
            self.lost = True
            return True
        else:
            return False

    def moveSnake(self, direction):
        if(self.hasWon()):
            return
        
        current = self.head

        if(direction == "Right" and self.direction == "Left"):
            self.direction = self.direction
        elif(direction == "Left" and self.direction == "Right"):
            self.direction = self.direction
        elif(direction == "Up" and self.direction == "Down"):
            self.direction = self.direction
        elif(direction == "Down" and self.direction == "Up"):
            self.direction = self.direction
        elif(direction == "" or direction == None):
            self.direction = self.direction
        else:
            self.direction = direction
        
        col1 = current.col
        row1 = current.row


        colLost = current.col
        rowLost = current.row

        if(current.next):
            col2 = current.next.col
            row2 = current.next.row

        if(self.direction == "Right"):
            if(colLost == 9):
                colLost = 0
            else:
                colLost = colLost + 1
        if(self.direction == "Left"):
            if(colLost == 0):
                colLost = 9
            else:
                colLost = colLost - 1        
        if(self.direction == "Up"):
            if(rowLost == 0):
                rowLost = 9
            else:
                rowLost = rowLost - 1
        if(self.direction == "Down"):
            if(rowLost == 9):
                rowLost = 0
            else:
                rowLost = rowLost + 1

        if(self.hasLost(rowLost, colLost)):
            current.row = rowLost
            current.col = colLost
            return

        current.row = rowLost
        current.col = colLost

        ateApple = False
        
        if(current.row == self.apple[0] and current.col == self.apple[1]):
            ateApple = True
            self.addApple()
        
        if(current.next):
            current = current.next

            while(current.next):
                col2 = current.col
                row2 = current.row
                current.col = col1
                current.row = row1
                col1 = col2
                row1 = row2
                current = current.next


        col2 = current.col
        row2 = current.row
        current.col = col1
        current.row = row1

        if ateApple:
            newNode = node(row2, col2)
            self.tail.next = newNode
            newNode.prev = current
            self.tail = newNode
        
            
    def reset(self):
        self.grid = [[0 for _ in range(10)] for _ in range(10)]
        self.head = node(3, 3)
        self.direction = "Left"
        self.apple = [3, 1]
        self.won = False
        self.lost = False

        self.head.next = node(3, 4)
        self.tail = self.head.next


    def updateGrid(self):
        if(self.lost):
            self.grid = [["Lost" for _ in range(10)] for _ in range(10)]
        elif(self.won):
            self.grid = [["Win" for _ in range(10)] for _ in range(10)]
        else:
            self.grid = [[0 for _ in range(10)] for _ in range(10)]

        current = self.head

        while(current.next):
            self.grid[current.row][current.col] = "snake"
            current = current.next

        self.grid[self.apple[0]][self.apple[1]] = "Apple"
        self.grid[current.row][current.col] = "snake"
        


    def addApple(self):
        randomNumber1 = random.randint(0,9)
        randomNumber2 = random.randint(0,9)
        while(self.grid[randomNumber1][randomNumber2] == "snake"):
            randomNumber1 = random.randint(0,9)
            randomNumber2 = random.randint(0,9)
            
        self.apple = [randomNumber1, randomNumber2]
        self.grid[randomNumber1][randomNumber2] = "Apple"

    def getGrid(self):
        self.updateGrid()
        return self.grid






    


