// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface TokenIRC20 {
    function mint(address to, uint256 amount) external;

    function burn(address owner, uint256 amount) external;
}

/// @title   Ethereum or Klaytn Bridge
/// @author chandrashekhar
/// @notice You can use this contract for transfer token between two blockchain networks
/// @dev All function calls are currently implemented without side effects

contract BridgeEthNet {
    TokenIRC20 irc20Token;
    uint256 nonce; //nonce will allow to check this nonce is already complete
    address signer; // signer
    mapping(uint256 => bool) public processNonce; // processNonce gose inside the mapping
    mapping(bytes32 => bool) public processSecretData; // processSecretData
    address[] public availableTokens; // availableTokens;

    event TransferEthToKly(
        address indexed sender,
        uint256 amount,
        uint256 nonce,
        bytes32 secretData
    );
    event TransferKlyToEth(
        address indexed sender,
        address indexed receiver,
        uint256 amount,
        uint256 nonce,
        bytes32 secretData
    );
    event WithdrawFromEth(
        address indexed from,
        address indexed receiver,
        uint256 amount,
        uint256 nonces,
        bytes32 secretData
    );

    constructor(address _tokens, address _signer) {
        irc20Token = TokenIRC20(_tokens);
        signer = _signer;
    }

    function addIRC20Token(address _token) public {
        irc20Token = TokenIRC20(_token);
        availableTokens.push(_token);
    }
}
