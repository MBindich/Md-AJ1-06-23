//3. Напишите анотации типов к этому классу.
export class ObjectManipulator {

    constructor(protected obj: object) { }

    public set(key: number, value:string) {
        return new ObjectManipulator({ ...this.obj, [key]: value });
    }

    public get(key: keyof typeof this.obj) {
        return this.obj[key];
    }

    public delete(key: keyof typeof this.obj) {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}
