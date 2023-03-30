window.BENCHMARK_DATA = {
  "lastUpdate": 1680215388835,
  "repoUrl": "https://github.com/MystenLabs/sui",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea474c08e6187f08abafae9ef13e91f282162fde",
          "message": "[Narwhal] call handlers directly for local PrimaryToWorker and WorkerToPrimary communications (#9821)\n\n## Description \r\n\r\nWe have observed the following issues in practice:\r\n1. PrimaryToWorker and WorkerToPrimary connections sometimes break or\r\nstay broken. The can be multiple causes, e.g. network misconfigurations,\r\nload, fragile logic or something else.\r\n2. There are components that are dependencies for network handlers, or\r\npart of consensus, e.g. Synchronizer and Subscriber, that need access to\r\nthe network, but passing Network to them cannot be done at creation\r\ntime.\r\n\r\nThis change aims to address the above two issues:\r\n1. Wire PrimaryToWorker and WorkerToPrimary handlers to the client\r\ncallsites directly, without going through the networking layer.\r\n2. Pass a `NetworkClient` object to components that need access to the\r\nnetwork. Local handlers and in future remote Networks will be wired to\r\nthe `NetworkClient`, but these do not need to happen before the creation\r\nof `NetworkClient`.\r\n\r\n#10168\r\n\r\n## Test Plan \r\n\r\nexisting tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-03-30T22:19:34Z",
          "tree_id": "8130c5c7849808336b9cb949eb7d05c64cf3b843",
          "url": "https://github.com/MystenLabs/sui/commit/ea474c08e6187f08abafae9ef13e91f282162fde"
        },
        "date": 1680215386083,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 174360782,
            "range": "± 11934546",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305478,
            "range": "± 3598",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}