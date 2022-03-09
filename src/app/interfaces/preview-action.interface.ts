export interface PreviewAction {
  readonly icon: string;
  readonly title: string;
  readonly onClick: (index: number) => void;
}
