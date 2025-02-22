import validator from 'validator';

const mail = validator.isEmail('test@test.com')
const mail2 = validator.isEmail('abcDE')
console.info(mail)
console.info(mail2)

/*
check if the string is an email.

options is an object which defaults to { allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, allow_underscores: false, domain_specific_validation: false, blacklisted_chars: '', host_blacklist: [] }. If allow_display_name is set to true, the validator will also match Display Name <email-address>. If require_display_name is set to true, the validator will reject strings without the format Display Name <email-address>. If allow_utf8_local_part is set to false, the validator will not allow any non-English UTF8 character in email address' local part. If require_tld is set to false, email addresses without a TLD in their domain will also be matched. If ignore_max_length is set to true, the validator will not check for the standard max length of an email. If allow_ip_domain is set to true, the validator will allow IP addresses in the host part. If domain_specific_validation is true, some additional validation will be enabled, e.g. disallowing certain syntactically valid email addresses that are rejected by Gmail. If blacklisted_chars receives a string, then the validator will reject emails that include any of the characters in the string, in the name part. If host_blacklist is set to an array of strings and the part of the email after the @ symbol matches one of the strings defined in it, the validation fails. If host_whitelist is set to an array of strings and the part of the email after the @ symbol matches none of the strings defined in it, the validation fails.
*/