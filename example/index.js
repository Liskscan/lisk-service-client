const { LiskService } = require("../lib")

const service = new LiskService({
  url: "service.lisk.com",
})

const getBlocks = async () => {
  const blocks = await service.rpc("get.blocks", { limit: 25 })
  if (blocks.status === "success") {
    console.log(blocks.data)
  } else {
    console.error(blocks)
  }
}
getBlocks()
