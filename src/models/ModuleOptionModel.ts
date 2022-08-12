import { ModuleShapeTypes } from './ModuleShapeTypes';

export class ModuleOptionModel {
  public Custom?: React.ReactNode;

  public Color: string;

  public FillColor: string;

  public Shape!: ModuleShapeTypes;

  public Text!: string;

  constructor() {
    this.Color = '#000000';

    this.FillColor = '#ffffff';
  }
}
