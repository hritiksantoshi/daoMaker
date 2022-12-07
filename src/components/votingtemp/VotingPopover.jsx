import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export const statusPopover = (
  <Popover id="popover-basic">
    <Popover.Header role='button' as="h6">All</Popover.Header>
    <Popover.Header role='button' as="h6">Open</Popover.Header>
    <Popover.Header role='button' as="h6">Closed</Popover.Header>
  </Popover>
);
export const outcomePopover = (
    <Popover id="popover-basic">
      <Popover.Header role='button' as="h6">All</Popover.Header>
      <Popover.Header role='button' as="h6">Passed</Popover.Header>
      <Popover.Header role='button' as="h6">Rejected</Popover.Header>
      <Popover.Header role='button' as="h6">Enacted</Popover.Header>
      <Popover.Header role='button' as="h6">Pending</Popover.Header>

    </Popover>
  );

  export const appPopover = (
    <Popover id="popover-basic">
      <Popover.Header role='button' as="h6">All</Popover.Header>
      <Popover.Header role='button' as="h6">Voting</Popover.Header>
      <Popover.Header role='button' as="h6">Finance</Popover.Header>
      <Popover.Header role='button' as="h6">Tokens</Popover.Header>
      <Popover.Header role='button' as="h6">External</Popover.Header>

    </Popover>
  );