import React from 'react';
import { Switch } from 'react-native-paper';

type SwitcherProps = {
  value: boolean;
  onToggle: () => void;
};

const Switcher: React.FC<SwitcherProps> = ({ value, onToggle }) => (
  <Switch value={value} onValueChange={onToggle} />
);

export default Switcher;