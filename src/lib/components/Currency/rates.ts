import { moneyVO } from '@/lib/utils/format/Money';
import { ICurrency } from '@/lib/interfaces';
import { argFlag, brFlag, pyFlag } from '@/lib/utils/images/flags';

const CurrencyData: ICurrency[] = [
    {
        name: 'Brazilian Real',
        id: 'BRL',
        rate: 5.03,
        rateString: moneyVO.format(5.03, 'BRL'),
        flag: brFlag,
    },
    {
        name: 'Paraguaian Guarani',
        id: 'PYG',
        rate: 7250,
        rateString: moneyVO.format(7250, 'PYG'),
        flag: pyFlag,
    },
    {
        name: 'Argentine Pesos',
        id: 'ARS',
        rate: 1120,
        rateString: moneyVO.format(1120, 'ARS'),
        flag: argFlag,
    },
] as const;

export default CurrencyData;
