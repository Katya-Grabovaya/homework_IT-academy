export class ObjectManipulator<T> {
    constructor(protected obj: Record<string, T>) {}
  
    public set(key: string, value: T): ObjectManipulator<T> {
      return new ObjectManipulator({...this.obj, [key]: value});
    }
  
    public get(key: string): T {
      return this.obj[key];
    }
  
    public delete(key: string): ObjectManipulator<T> {
      const newObj = {...this.obj};
      delete newObj[key];
      return new ObjectManipulator(newObj);
    }
  
    public getObject(): Record<string, T> {
      return this.obj;
    }
  }