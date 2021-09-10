class calc {
    currentValue = 0;
    currentOperation = '';
    currentResult = 0;

    operate(nextOperation)
    {

        switch (this.currentOperation) {
            case '+':
                this.currentResult += this.currentValue;
                break;
            case '-':
                this.currentResult -= this.currentValue;
                break;
            case '*':
                this.currentResult *= this.currentValue;
                break;
            case '/':
                this.currentResult /= this.currentValue;
                break;   
            case '=':
                this.nextOperation = '';
                break;                               
            default:
                this.currentResult = this.currentValue;
                break;
        }
        
        this.currentOperation = nextOperation;
    }
}