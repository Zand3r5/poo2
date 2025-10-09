'use-strict'

const Romanos = function (decimal) {
    this.alfabeto = [
        [1, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M'],
    ]
    this.decimal = decimal;
    this.romano;

    this.aRomano = () => {

        if (this.decimal != 0) {
            if (decimal % 1000 == 0) {
                romano += 'M';
                this.decimal %= 1000;
                aRomano();
            }
            if (decimal % 1000 == 0) {
                romano += 'M';
                this.decimal %= 1000;
                aRomano();
            }
        }
    }
}