class ColorAttributeConstants {

  static readonly attributeName: string = 'color';
  static readonly id: string = 'hd312782d';

  static map = {
    'verde': '#00ff00',
    'rojo': '#ff0000',
    'azul': '#0000ff',
    'amarillo': '#ffff00',
    'negro': '#000000',
    'blanco': '#ffffff',
    'rosado': '#ff00ff',
    'gris': '#808080',
  };


  static getColor(name?: string) {
    const colorName = (name ?? '').toLowerCase() as keyof typeof ColorAttributeConstants.map;
    return ColorAttributeConstants.map[colorName] ?? undefined;
  }
}

export { ColorAttributeConstants }