import styled from 'styled-components';
import { Text } from '@aragon/ui';
var EthAddr = styled(Text).attrs({
  size: 'small'
}).withConfig({
  displayName: "EthAddr",
  componentId: "sc-1wp4etz-0"
})(["color:", ";word-break:break-all;"], function (_ref) {
  var theme = _ref.theme;
  return theme.contentSecondary;
});
export default EthAddr;