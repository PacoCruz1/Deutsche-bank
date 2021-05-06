import { IInput } from '../Interface/Iinput';

export class InputClass implements IInput
{
    private _id: string;
    private _valueId: string;
    private _isFinish: boolean;

    GetId()
    {
        return this._id;
    }

    SetId(value: string)
    {
        this._id = value;
    }

    GetValueId()
    {
        return this._valueId;
    }

    SetValueId(value: string)
    {
        this._valueId = value;
    }

    GetIsFinish()
    {
        return this._isFinish;
    }

    SetIsFinish(value: boolean)
    {
        this._isFinish = value;
    }

    constructor(public id: string, public valueId: string, public isFinish: boolean)
    {
        this._id = id;
        this._valueId = valueId;
        this._isFinish = isFinish;
    }

}