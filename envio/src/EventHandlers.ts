// https://docs.envio.dev
import {Pip, Pip_Deposit} from "generated";

Pip.Deposit.handler(async ({ event, context }) => {

  const entity: Pip_Deposit = {
    id: `${event.srcAddress}-${event.block.number}-${event.logIndex}`,
    leaf: event.params.leaf,
    _leafIndex: event.params._leafIndex,
    _treeIndex: event.params._treeIndex,
    root: event.params.root
  };

  context.Pip_Deposit.set(entity);
});