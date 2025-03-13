import assert from "assert";
import { 
  TestHelpers,
  Pip_Deposit
} from "generated";
const { MockDb, Pip } = TestHelpers;

describe("Pip contract Deposit event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Pip contract Deposit event
  const event = Pip.Deposit.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Pip_Deposit is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Pip.Deposit.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualPipDeposit = mockDbUpdated.entities.Pip_Deposit.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedPipDeposit: Pip_Deposit = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      leaf: event.params.leaf,
      _leafIndex: event.params._leafIndex,
      _treeIndex: event.params._treeIndex,
      root: event.params.root,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualPipDeposit, expectedPipDeposit, "Actual PipDeposit should be the same as the expectedPipDeposit");
  });
});
