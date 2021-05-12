exports.queryReportSchema = {
  type: "object",
  properties: {
    query: {
      type: "object",
      properties: {
        configurationIds: { type: "array" },
        sampleIds: { type: "array" },
        last: { type: "number" }
      },
      required: ["configurationIds"]
    }
  },
  required: ["query"],
  additionalProperties: false,
}